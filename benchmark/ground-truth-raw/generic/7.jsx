<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"We value your feedback!"} />
  <Input value={name} label={"Name"} onChange={(e) => setName(e.target.value)} />
  <Input value={email} label={"Email"} onChange={(e) => setEmail(e.target.value)} />
  <TextArea value={experience} onChange={(e) => setExperience(e.target.value)} />
  <Checkbox label={"Subscribe to our newsletter"} checked={subscribed} onChange={() => setSubscribed(!subscribed)} />
  <Button text={"Submit Feedback"} type={"primary"} onClick={() => setSubmitted(true)} />
  {submitted && (
    <Toast message={"Thank you for your feedback!"} type={'success'} onClose={() => setSubmitted(false)} />
  )}
</div>

