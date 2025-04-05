<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Subscribe to our Newsletter"} />

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Input value={email} label={"Email"} onChange={(e) => setEmail(e.target.value)} />
    <Button text={"Sign Up"} type={"primary"} onClick={() => { if (email) setShowToast(true); }} />
  </div>

  {showToast && (
    <Toast message={"Thanks for subscribing!"} type={"success"} onClose={() => setShowToast(false)} />
  )}
</div>
