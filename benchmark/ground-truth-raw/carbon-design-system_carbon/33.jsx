<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Subscribe to our Newsletter"}</Text>

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <TextInput labelText={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />
    <Button kind='primary' onClick={() => { if (email) setShowToast(true); }} >{"Sign Up"}</Button>
  </div>

  {showToast && (
    <ToastNotification kind={"success"} onClose={() => setShowToast(false)} title={"Thanks for subscribing!"} />
  )}
</div>
