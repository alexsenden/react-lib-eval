<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Subscribe to our Newsletter"}</Text>

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
    <Button onClick={() => { if (email) setShowToast(true); }} tone='success' >{"Sign Up"}</Button>
  </div>

  {showToast && (
    <Toast content={"Thanks for subscribing!"} onDismiss={() => setShowToast(false)} />
  )}
</div>
