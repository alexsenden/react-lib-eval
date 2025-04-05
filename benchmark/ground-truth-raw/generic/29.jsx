<div style={{"display": "flex", "flexDirection": "column"}}>
  <Input value={username} label={"Username"} onChange={(e) => setUsername(e.target.value)} />
  <TextArea value={status} onChange={(e) => setStatus(e.target.value)} />
  <Button text={"Post"} type={"primary"} onClick={handlePost} />
</div>

