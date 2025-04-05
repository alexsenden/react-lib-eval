<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"We value your feedback!"}</Text>
  <Label>{"Name"}<Input onChange={(e) => setName(e.target.value)} value={name}/></Label>
  <Label>{"Email"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  <TextArea value={experience} onChange={(e) => setExperience(e.target.value)}/>
  <StyledLabel><Checkbox defaultChecked={subscribed} onChange={() => setSubscribed(!subscribed)} />{"Subscribe to our newsletter"}</StyledLabel>
  <Button color={"primary"} onClick={() => setSubmitted(true)}>{"Submit Feedback"}</Button>
  {submitted && (
    <Toast colorScheme={'success'} onRemoveClick={() => setSubmitted(false)} >{"Thank you for your feedback!"}</Toast>
  )}
</div>

