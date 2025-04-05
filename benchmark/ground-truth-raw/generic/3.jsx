<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar progress={(step / 3) * 100} />

  {step === 1 && (
    <Input value={email} label={"Email"} onChange={(e) => setEmail(e.target.value)} />
  )}

  {step === 2 && (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Input value={firstName} label={"First Name"} onChange={(e) => setFirstName(e.target.value)} />
      <Toggle isActive={emailOptIn} />
    </div>
  )}

  {step === 3 && (
    <TextArea value={bio} />
  )}

  <Button text={"Opt-In to Promotional Emails?"} type={'primary'} onClick={() => setStep((prev) => Math.min(prev + 1, 3))} />
</div>
