<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar />

  {step === 0 && (
    <>
      <RadioButton checked={role === "Developer"} label={"Developer"} onChange={() => setRole("Developer")} />
      <RadioButton checked={role === "Designer"} label={"Designer"} onChange={() => setRole("Designer")} />
      <RadioButton checked={role === "Manager"} label={"Manager"} onChange={() => setRole("Manager")} />
    </>
  )}

  {step === 1 && (
    <TextField value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Enter your email"} />
  )}

  {step === 2 && (
    <Checkbox label={"I agree to the terms"} checked={agreed} onChange={() => setAgreed(!agreed)} />
  )}

  {step === 3 && (
    <Badge tone={'success'} >{"Setup Complete"}</Badge>
  )}

  {step < 3 && (
    <Button onClick={() => setStep(step + 1)} tone='success' >{"Next"}</Button>
  )}
</div>

