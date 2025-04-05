<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={username} onChange={(e) => setUsername(e.target.value)}/><Text content={"Username"} type='body' /></div>
  <TextArea value={status} onChange={(e) => setStatus(e.target.value)} />
  <Button color='info' onClick={handlePost} >{"Post"}</Button>
</div>

