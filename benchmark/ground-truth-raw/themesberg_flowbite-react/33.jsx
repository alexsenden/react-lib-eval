<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Subscribe to our Newsletter"} />

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email"} type='body' /></div>
    <Button color='info' onClick={() => { if (email) setShowToast(true); }} >{"Sign Up"}</Button>
  </div>

  {showToast && (
    <Toast >{"Thanks for subscribing!"}</Toast>
  )}
</div>
