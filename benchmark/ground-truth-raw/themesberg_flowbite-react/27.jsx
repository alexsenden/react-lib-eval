<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={name} onChange={(e) => setName(e.target.value)}/><Text content={"Name"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email"} type='body' /></div>
  <Text type={"title"} text={"Would you like to be contacted?"} />
  <ToggleSwitch checked={contactOptIn} onChange={() => setContactOptIn(!contactOptIn)} />
  {contactOptIn && ( 
    <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={subscribe} onChange={() =>setSubscribe(!subscribe)} /><Text content={"Subscribe to newsletter"} type='body' /></div>
  )} 
  <Text type={"title"} text={"How was your experience?"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={experience === "Good"} onChange={() => setExperience("Good")}/><Text content={"Good"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={experience === "Neutral"} onChange={() => setExperience("Neutral")}/><Text content={"Neutral"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={experience === "Bad"} onChange={() => setExperience("Bad")}/><Text content={"Bad"} type='body' /></div>
  <TextArea value={comments} onChange={(e) => setComments(e.target.value)} />
  <Button color='info' onClick={handleSubmit} >{"Submit Feedback"}</Button>
</div>

