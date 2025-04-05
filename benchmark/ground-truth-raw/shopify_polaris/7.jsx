<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"We value your feedback!"}</Text>
  <TextField value={name} onChange={(e) => setName(e.target.value)} label={"Name"} />
  <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
  <TextArea value={experience} onChange={(e) => setExperience(e.target.value)} />
  <Checkbox label={"Subscribe to our newsletter"} checked={subscribed} onChange={() => setSubscribed(!subscribed)} />
  <Button onClick={() => setSubmitted(true)} tone='success' >{"Submit Feedback"}</Button>
  {submitted && (
    <Toast content={"Thank you for your feedback!"} onDismiss={() => setSubmitted(false)} />
  )}
</div>

