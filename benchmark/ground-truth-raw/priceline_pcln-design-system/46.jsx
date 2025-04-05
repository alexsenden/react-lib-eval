<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar />

  {step === 0 && (
    <>
      <RadioLabel><Radio checked={role === "Developer"} onChange={() => setRole("Developer")} /><LabelText>{"Developer"}</LabelText></RadioLabel>
      <RadioLabel><Radio checked={role === "Designer"} onChange={() => setRole("Designer")} /><LabelText>{"Designer"}</LabelText></RadioLabel>
      <RadioLabel><Radio checked={role === "Manager"} onChange={() => setRole("Manager")} /><LabelText>{"Manager"}</LabelText></RadioLabel>
    </>
  )}

  {step === 1 && (
    <Label><Input placeholder={"Enter your email"} onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  )}

  {step === 2 && (
    <StyledLabel><Checkbox defaultChecked={agreed} onChange={() => setAgreed(!agreed)} />{"I agree to the terms"}</StyledLabel>
  )}

  {step === 3 && (
    <Badge bg={'green'} >{"Setup Complete"}</Badge>
  )}

  {step < 3 && (
    <Button color={"primary"} onClick={() => setStep(step + 1)}>{"Next"}</Button>
  )}
</div>

