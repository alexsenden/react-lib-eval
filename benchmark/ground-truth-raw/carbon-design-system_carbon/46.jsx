<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar />

  {step === 0 && (
    <>
      <RadioButton labelText={"Developer"} checked={role === "Developer"} onChange={() => setRole("Developer")} />
      <RadioButton labelText={"Designer"} checked={role === "Designer"} onChange={() => setRole("Designer")} />
      <RadioButton labelText={"Manager"} checked={role === "Manager"} onChange={() => setRole("Manager")} />
    </>
  )}

  {step === 1 && (
    <TextInput placeholder={"Enter your email"} onChange={(e) => setEmail(e.target.value)} value={email} />
  )}

  {step === 2 && (
    <Checkbox labelText={"I agree to the terms"} onChange={() => setAgreed(!agreed)} checked={agreed} />
  )}

  {step === 3 && (
    <Badge text={"Setup Complete"} type={"success"} />
  )}

  {step < 3 && (
    <Button kind='primary' onClick={() => setStep(step + 1)} >{"Next"}</Button>
  )}
</div>

