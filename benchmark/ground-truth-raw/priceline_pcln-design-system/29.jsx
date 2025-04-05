<div style={{"display": "flex", "flexDirection": "column"}}>
  <Label>{"Username"}<Input onChange={(e) => setUsername(e.target.value)} value={username}/></Label>
  <TextArea value={status} onChange={(e) => setStatus(e.target.value)}/>
  <Button color={"primary"} onClick={handlePost}>{"Post"}</Button>
</div>

