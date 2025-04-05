<div style={{display: 'flex', flexDirection: 'column'}}>
  <Progress />

  {step === 0 && (
    <>
      <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={role === "Developer"} onChange={() => setRole("Developer")}/><Text content={"Developer"} type='body' /></div>
      <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={role === "Designer"} onChange={() => setRole("Designer")}/><Text content={"Designer"} type='body' /></div>
      <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={role === "Manager"} onChange={() => setRole("Manager")}/><Text content={"Manager"} type='body' /></div>
    </>
  )}

  {step === 1 && (
    <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Enter your email"}/><Text type='body' /></div>
  )}

  {step === 2 && (
    <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} /><Text content={"I agree to the terms"} type='body' /></div>
  )}

  {step === 3 && (
    <Badge color={'success'}>{"Setup Complete"}</Badge>
  )}

  {step < 3 && (
    <Button color='info' onClick={() => setStep(step + 1)} >{"Next"}</Button>
  )}
</div>

