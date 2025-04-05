<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select value={experience} options={[ {"value": "Excellent", "label": "Excellent"}, {"value": "Good", "label": "Good"}, {"value": "Bad", "label": "Bad"} ]} onChange={(e) => setExperience(e.target.value)} />

  {experience === "Bad" && ( 
    <TextArea value={badFeedback} onChange={(e) => setBadFeedback(e.target.value)} />
  )}

  <Checkbox label={"Subscribe to updates about this issue"} checked={subscribed} onChange={() => setSubscribed(!subscribed)} />

  <Button text={"Submit"} type={"primary"} onClick={() => setShowToast(true)} />

  {showToast && (
    <Toast message={"Thank you for your feedback."} type={"info"} onClose={() => setShowToast(false)} />
  )}
</div>

