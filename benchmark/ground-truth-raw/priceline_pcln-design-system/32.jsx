<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Contact Support"}</Text>

  <Label>{"Name"}<Input onChange={(e) => setName(e.target.value)} value={name}/></Label>
  <Label>{"Email"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  <TextArea value={message} onChange={(e) => setMessage(e.target.value)}/>

  <Toggle isOn={subscribe} onToggle={() => setSubscribe(!subscribe)} />

  <Button color={"primary"} onClick={() => { if (name && email && message) { setShowToast(true) }}}>{"Submit"}</Button>

  {showToast && (
    <Toast colorScheme={"success"} onRemoveClick={() => setShowToast(false)} >{"Your message has been submitted!"}</Toast>
  )}
</div>

