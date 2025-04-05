<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Feedback"}</Text>
  <TextArea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
  <Select value={rating} options={[{"value": "Poor", "label": "Poor"}, {"value": "Average", "label": "Average"}, {"value": "Excellent", "label": "Excellent"}]} />
  <Button onClick={() => setFeedbackSubmitted(true)} tone='success' >{"Submit Feedback"}</Button>
  <Banner tone='success' ><Text as="p">{"Feedback submitted successfully!"}</Text></Banner>
</div>
