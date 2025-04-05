<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Feedback"} />
  <TextArea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
  <Select value={rating} ><option>Poor</option><option>Average</option><option>Excellent</option></Select>
  <Button color='info' onClick={() => setFeedbackSubmitted(true)} >{"Submit Feedback"}</Button>
  <Alert color='success' >{"Feedback submitted successfully!"}</Alert>
</div>
