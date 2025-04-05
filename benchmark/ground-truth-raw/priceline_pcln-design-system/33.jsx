<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Subscribe to our Newsletter"}</Text>

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Label>{"Email"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
    <Button color={"primary"} onClick={() => { if (email) setShowToast(true); }}>{"Sign Up"}</Button>
  </div>

  {showToast && (
    <Toast colorScheme={"success"} onRemoveClick={() => setShowToast(false)} >{"Thanks for subscribing!"}</Toast>
  )}
</div>
