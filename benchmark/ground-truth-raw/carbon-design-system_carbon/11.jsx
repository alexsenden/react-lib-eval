<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Login"}</Text>
  <TextInput labelText={"Username"} onChange={(e) => setUsername(e.target.value)} value={username} />
  <TextInput labelText={"Password"} onChange={(e) => setPassword(e.target.value)} value={password} />
  <Button kind='primary' onClick={handleLogin} >{"Log In"}</Button>
</div>
