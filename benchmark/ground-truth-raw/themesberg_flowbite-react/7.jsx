<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"We value your feedback!"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={name} onChange={(e) => setName(e.target.value)}/><Text content={"Name"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email"} type='body' /></div>
  <TextArea value={experience} onChange={(e) => setExperience(e.target.value)} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={subscribed} onChange={() => setSubscribed(!subscribed)} /><Text content={"Subscribe to our newsletter"} type='body' /></div>
  <Button color='info' onClick={() => setSubmitted(true)} >{"Submit Feedback"}</Button>
  {submitted && (
    <Toast >{"Thank you for your feedback!"}</Toast>
  )}
</div>

