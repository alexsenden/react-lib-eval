<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Contact Support"}</Text>

  <TextInput labelText={"Name"} onChange={(e) => setName(e.target.value)} value={name} />
  <TextInput labelText={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />
  <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />

  <Toggle onToggle={() => setSubscribe(!subscribe)} />

  <Button kind='primary' onClick={() => { if (name && email && message) { setShowToast(true) }}} >{"Submit"}</Button>

  {showToast && (
    <ToastNotification kind={"success"} onClose={() => setShowToast(false)} title={"Your message has been submitted!"} />
  )}
</div>

