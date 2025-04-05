<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Login"} />
  <Input value={username} label={"Username"} onChange={(e) => setUsername(e.target.value)} />
  <Input value={password} label={"Password"} onChange={(e) => setPassword(e.target.value)} />
  <Button text={"Log In"} type={"primary"} onClick={handleLogin} />
</div>
