<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Feedback"}</Text>
  <TextArea value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
  <Select defaultValue={rating} ><option>Poor</option><option>Average</option><option>Excellent</option></Select>
  <Button color={"primary"} onClick={() => setFeedbackSubmitted(true)}>{"Submit Feedback"}</Button>
  <Banner color='green' text={"Feedback submitted successfully!"} />
</div>
