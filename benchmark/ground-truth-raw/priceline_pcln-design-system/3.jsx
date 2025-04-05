<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar steps={3} />

  {step === 1 && (
    <Label>{"Email"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  )}

  {step === 2 && (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Label>{"First Name"}<Input onChange={(e) => setFirstName(e.target.value)} value={firstName}/></Label>
      <Toggle isOn={emailOptIn} onToggle={() => setEmailOptIn(!emailOptIn)} />
    </div>
  )}

  {step === 3 && (
    <TextArea value={bio}/>
  )}

  <Button color={'primary'} onClick={() => setStep((prev) => Math.min(prev + 1, 3))}>{"Opt-In to Promotional Emails?"}</Button>
</div>
