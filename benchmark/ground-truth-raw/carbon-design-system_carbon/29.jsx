<div style={{"display": "flex", "flexDirection": "column"}}>
  <TextInput labelText={"Username"} onChange={(e) => setUsername(e.target.value)} value={username} />
  <TextArea value={status} onChange={(e) => setStatus(e.target.value)} />
  <Button kind='primary' onClick={handlePost} >{"Post"}</Button>
</div>

