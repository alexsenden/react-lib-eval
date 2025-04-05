<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"We value your feedback!"}</Text>
  <TextInput labelText={"Name"} onChange={(e) => setName(e.target.value)} value={name} />
  <TextInput labelText={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />
  <TextArea value={experience} onChange={(e) => setExperience(e.target.value)} />
  <Checkbox labelText={"Subscribe to our newsletter"} onChange={() => setSubscribed(!subscribed)} checked={subscribed} />
  <Button kind='primary' onClick={() => setSubmitted(true)} >{"Submit Feedback"}</Button>
  {submitted && (
    <ToastNotification kind={'success'} onClose={() => setSubmitted(false)} title={"Thank you for your feedback!"} />
  )}
</div>

