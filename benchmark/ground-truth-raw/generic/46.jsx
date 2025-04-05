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
    <Input value={email} placeholder={"Enter your email"} onChange={(e) => setEmail(e.target.value)} />
  )}

  {step === 2 && (
    <Checkbox label={"I agree to the terms"} checked={agreed} onChange={() => setAgreed(!agreed)} />
  )}

  {step === 3 && (
    <Badge text={"Setup Complete"} type={"success"} />
  )}

  {step < 3 && (
    <Button text={"Next"} type={"primary"} onClick={() => setStep(step + 1)} />
  )}
</div>

