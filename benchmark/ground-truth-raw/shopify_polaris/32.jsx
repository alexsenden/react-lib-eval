<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Contact Support"}</Text>

  <TextField value={name} onChange={(e) => setName(e.target.value)} label={"Name"} />
  <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
  <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />

  <Toggle isActive={subscribe} />

  <Button onClick={() => { if (name && email && message) { setShowToast(true) }}} tone='success' >{"Submit"}</Button>

  {showToast && (
    <Toast content={"Your message has been submitted!"} onDismiss={() => setShowToast(false)} />
  )}
</div>

