<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Contact Support"} />

  <Input value={name} label={"Name"} onChange={(e) => setName(e.target.value)} />
  <Input value={email} label={"Email"} onChange={(e) => setEmail(e.target.value)} />
  <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />

  <Toggle isActive={subscribe} />

  <Button text={"Submit"} type={"primary"} onClick={() => { if (name && email && message) { setShowToast(true) }}} />

  {showToast && (
    <Toast message={"Your message has been submitted!"} type={"success"} onClose={() => setShowToast(false)} />
  )}
</div>

