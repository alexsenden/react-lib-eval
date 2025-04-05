<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Login"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={username} onChange={(e) => setUsername(e.target.value)}/><Text content={"Username"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={password} onChange={(e) => setPassword(e.target.value)}/><Text content={"Password"} type='body' /></div>
  <Button color='info' onClick={handleLogin} >{"Log In"}</Button>
</div>
