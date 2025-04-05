<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select defaultValue={experience} onChange={(e) => setExperience(e.target.value)} ><option>Excellent</option><option>Good</option><option>Bad</option></Select>

  {experience === "Bad" && ( 
    <TextArea value={badFeedback} onChange={(e) => setBadFeedback(e.target.value)}/>
  )}

  <StyledLabel><Checkbox defaultChecked={subscribed} onChange={() => setSubscribed(!subscribed)} />{"Subscribe to updates about this issue"}</StyledLabel>

  <Button color={"primary"} onClick={() => setShowToast(true)}>{"Submit"}</Button>

  {showToast && (
    <Toast colorScheme={"info"} onRemoveClick={() => setShowToast(false)} >{"Thank you for your feedback."}</Toast>
  )}
</div>

