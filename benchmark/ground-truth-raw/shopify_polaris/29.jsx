<div style={{"display": "flex", "flexDirection": "column"}}>
  <TextField value={username} onChange={(e) => setUsername(e.target.value)} label={"Username"} />
  <TextArea value={status} onChange={(e) => setStatus(e.target.value)} />
  <Button onClick={handlePost} tone='success' >{"Post"}</Button>
</div>

