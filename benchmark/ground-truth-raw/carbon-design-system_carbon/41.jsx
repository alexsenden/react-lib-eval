<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select onChange={(e) => setExperience(e.target.value)} defaultValue={experience} ><SelectItem value='Excellent' text='Excellent' /><SelectItem value='Good' text='Good' /><SelectItem value='Bad' text='Bad' /></Select>

  {experience === "Bad" && ( 
    <TextArea value={badFeedback} onChange={(e) => setBadFeedback(e.target.value)} />
  )}

  <Checkbox labelText={"Subscribe to updates about this issue"} onChange={() => setSubscribed(!subscribed)} checked={subscribed} />

  <Button kind='primary' onClick={() => setShowToast(true)} >{"Submit"}</Button>

  {showToast && (
    <ToastNotification kind={"info"} onClose={() => setShowToast(false)} title={"Thank you for your feedback."} />
  )}
</div>

