<div style={{display: 'flex', flexDirection: 'column'}}>
  <Progress progress={(step / 3)} />

  {step === 1 && (
    <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email"} type='body' /></div>
  )}

  {step === 2 && (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}><Input value={firstName} onChange={(e) => setFirstName(e.target.value)}/><Text content={"First Name"} type='body' /></div>
      <ToggleSwitch checked={emailOptIn} onChange={() => setEmailOptIn(!emailOptIn)} />
    </div>
  )}

  {step === 3 && (
    <TextArea value={bio} />
  )}

  <Button color='info' onClick={() => setStep((prev) => Math.min(prev + 1, 3))} >{"Opt-In to Promotional Emails?"}</Button>
</div>
