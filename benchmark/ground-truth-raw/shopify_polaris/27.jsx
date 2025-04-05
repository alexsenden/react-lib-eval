<div style={{"display": "flex", "flexDirection": "column"}}>
  <TextField value={name} onChange={(e) => setName(e.target.value)} label={"Name"} />
  <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
  <Text as='h1' >{"Would you like to be contacted?"}</Text>
  <Toggle isActive={contactOptIn} />
  {contactOptIn && ( 
    <Checkbox label={"Subscribe to newsletter"} checked={subscribe} onChange={() =>setSubscribe(!subscribe)} />
  )} 
  <Text as='h1' >{"How was your experience?"}</Text>
  <RadioButton checked={experience === "Good"} label={"Good"} onChange={() => setExperience("Good")} />
  <RadioButton checked={experience === "Neutral"} label={"Neutral"} onChange={() => setExperience("Neutral")} />
  <RadioButton checked={experience === "Bad"} label={"Bad"} onChange={() => setExperience("Bad")} />
  <TextArea value={comments} onChange={(e) => setComments(e.target.value)} />
  <Button onClick={handleSubmit} tone='success' >{"Submit Feedback"}</Button>
</div>

