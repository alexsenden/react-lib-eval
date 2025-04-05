<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Contact Support"} />

  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={name} onChange={(e) => setName(e.target.value)}/><Text content={"Name"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email"} type='body' /></div>
  <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />

  <ToggleSwitch checked={subscribe} onChange={() => setSubscribe(!subscribe)} />

  <Button color='info' onClick={() => { if (name && email && message) { setShowToast(true) }}} >{"Submit"}</Button>

  {showToast && (
    <Toast >{"Your message has been submitted!"}</Toast>
  )}
</div>

