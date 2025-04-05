<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select value={experience} onChange={(e) => setExperience(e.target.value)} ><option>Excellent</option><option>Good</option><option>Bad</option></Select>

  {experience === "Bad" && ( 
    <TextArea value={badFeedback} onChange={(e) => setBadFeedback(e.target.value)} />
  )}

  <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={subscribed} onChange={() => setSubscribed(!subscribed)} /><Text content={"Subscribe to updates about this issue"} type='body' /></div>

  <Button color='info' onClick={() => setShowToast(true)} >{"Submit"}</Button>

  {showToast && (
    <Toast >{"Thank you for your feedback."}</Toast>
  )}
</div>

