<div style={{"display": "flex", "flexDirection": "column"}}>
  <Input value={name} label={"Name"} onChange={(e) => setName(e.target.value)} />
  <Input value={email} label={"Email"} onChange={(e) => setEmail(e.target.value)} />
  <Text type={"title"} text={"Would you like to be contacted?"} />
  <Toggle isActive={contactOptIn} />
  {contactOptIn && ( 
    <Checkbox label={"Subscribe to newsletter"} checked={subscribe} onChange={() =>setSubscribe(!subscribe)} />
  )} 
  <Text type={"title"} text={"How was your experience?"} />
  <RadioButton checked={experience === "Good"} label={"Good"} onChange={() => setExperience("Good")} />
  <RadioButton checked={experience === "Neutral"} label={"Neutral"} onChange={() => setExperience("Neutral")} />
  <RadioButton checked={experience === "Bad"} label={"Bad"} onChange={() => setExperience("Bad")} />
  <TextArea value={comments} onChange={(e) => setComments(e.target.value)} />
  <Button text={"Submit Feedback"} type={"primary"} onClick={handleSubmit} />
</div>

