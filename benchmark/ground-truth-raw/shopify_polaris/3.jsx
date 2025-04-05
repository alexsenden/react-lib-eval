<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar progress={(step / 3) * 100} />

  {step === 1 && (
    <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
  )}

  {step === 2 && (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} label={"First Name"} />
      <Toggle isActive={emailOptIn} />
    </div>
  )}

  {step === 3 && (
    <TextArea value={bio} />
  )}

  <Button onClick={() => setStep((prev) => Math.min(prev + 1, 3))} tone='success' >{"Opt-In to Promotional Emails?"}</Button>
</div>
