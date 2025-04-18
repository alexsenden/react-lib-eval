import chromadb
import os

from sentence_transformers import SentenceTransformer

EMBEDDING_MODEL = "all-MiniLM-L6-v2"
CHUNK_SIZE_CHARS = 1000
RETRIEVED_SNIPPETS = 6


def allow_addition(filename, allow_stories, allow_impl):
    story_substring = "stories"
    is_story = story_substring in filename

    if is_story and allow_stories:
        return True
    elif (not is_story) and allow_impl:
        return True

    return False


def valid_path(path):
    if "node_modules" in path:
        return False
    if "dist" in path:
        return False
    if "build" in path:
        return False
    if "test" in path:
        return False
    if "spec" in path:
        return False
    return True


class RagDB:
    def __init__(self, persist_dir):
        self.chroma_client = chromadb.PersistentClient(
            path=persist_dir,
        )
        # Collection names must be between 3 and 63 characters
        self.collection_name = (
            persist_dir.replace("/", "-")
            .replace("_", "")
            .replace("-", "")
            .replace(".", "")[:50]
        )
        self.collection = self.chroma_client.create_collection(
            name=self.collection_name
        )
        self.embedder = SentenceTransformer(EMBEDDING_MODEL)

    def add_file_to_db(self, file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            code = f.read()

        chunks = [
            code[i : i + CHUNK_SIZE_CHARS]
            for i in range(0, len(code), CHUNK_SIZE_CHARS)
        ]
        embeddings = self.embedder.encode(chunks).tolist()

        for i, chunk in enumerate(chunks):
            self.collection.add(
                ids=[f"{file_path}-{i}"],
                embeddings=[embeddings[i]],
                metadatas=[{"filename": file_path}],
                documents=[chunk],
            )

    def add_dir_to_chromadb(self, directory, allow_stories, allow_impl):
        valid_extensions = ("js", "jsx", "ts", "tsx")

        for root, _, files in os.walk(directory):
            for file in files:
                if any(
                    ext == file.split(".")[-1] for ext in valid_extensions
                ) and allow_addition(file, allow_stories, allow_impl):
                    file_path = os.path.join(root, file)
                    if valid_path(file_path):
                        print(f"Adding {file_path} to ChromaDB...", flush=True)
                        self.add_file_to_db(file_path)

    def retrieve_relevant_code(self, query):
        query_embedding = self.embedder.encode([query]).tolist()
        results = self.collection.query(
            query_embeddings=query_embedding, n_results=RETRIEVED_SNIPPETS
        )

        retrieved_snippets = [
            f"SNIPPET {index + 1}: {doc}"
            for index, doc in enumerate(results["documents"][0])
        ]

        return "\n\n".join(retrieved_snippets)

    def cleanup(self):
        self.chroma_client.delete_collection(name=self.collection_name)
