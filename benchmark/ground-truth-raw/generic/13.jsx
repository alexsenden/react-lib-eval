<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Feedback"} />
  <TextArea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
  <Select value={rating} options={[{"value": "Poor", "label": "Poor"}, {"value": "Average", "label": "Average"}, {"value": "Excellent", "label": "Excellent"}]} />
  <Button text={"Submit Feedback"} type={"primary"} onClick={() => setFeedbackSubmitted(true)} />
  <Alert type={"success"} message={"Feedback submitted successfully!"} />
</div>
