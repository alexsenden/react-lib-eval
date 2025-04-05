<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Login"}</Text>
  <Label>{"Username"}<Input onChange={(e) => setUsername(e.target.value)} value={username}/></Label>
  <Label>{"Password"}<Input onChange={(e) => setPassword(e.target.value)} value={password}/></Label>
  <Button color={"primary"} onClick={handleLogin}>{"Log In"}</Button>
</div>
