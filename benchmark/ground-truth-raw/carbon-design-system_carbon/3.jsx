<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar value={(step / 3)} />

  {step === 1 && (
    <TextInput labelText={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />
  )}

  {step === 2 && (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <TextInput labelText={"First Name"} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      <Toggle onToggle={() => setEmailOptIn(!emailOptIn)} />
    </div>
  )}

  {step === 3 && (
    <TextArea value={bio} />
  )}

  <Button kind='primary' onClick={() => setStep((prev) => Math.min(prev + 1, 3))} >{"Opt-In to Promotional Emails?"}</Button>
</div>
