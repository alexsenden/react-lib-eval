<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Feedback"}</Text>
  <TextArea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
  <Select defaultValue={rating} ><SelectItem value='Poor' text='Poor' /><SelectItem value='Average' text='Average' /><SelectItem value='Excellent' text='Excellent' /></Select>
  <Button kind='primary' onClick={() => setFeedbackSubmitted(true)} >{"Submit Feedback"}</Button>
  <Alert type={"success"} message={"Feedback submitted successfully!"} />
</div>
