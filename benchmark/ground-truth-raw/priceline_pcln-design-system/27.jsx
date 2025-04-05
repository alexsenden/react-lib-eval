<div style={{"display": "flex", "flexDirection": "column"}}>
  <Label>{"Name"}<Input onChange={(e) => setName(e.target.value)} value={name}/></Label>
  <Label>{"Email"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  <Text textStyle='title1' >{"Would you like to be contacted?"}</Text>
  <Toggle isOn={contactOptIn} onToggle={() => setContactOptIn(!contactOptIn)} />
  {contactOptIn && ( 
    <StyledLabel><Checkbox defaultChecked={subscribe} onChange={() =>setSubscribe(!subscribe)} />{"Subscribe to newsletter"}</StyledLabel>
  )} 
  <Text textStyle='title1' >{"How was your experience?"}</Text>
  <RadioLabel><Radio checked={experience === "Good"} onChange={() => setExperience("Good")} /><LabelText>{"Good"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={experience === "Neutral"} onChange={() => setExperience("Neutral")} /><LabelText>{"Neutral"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={experience === "Bad"} onChange={() => setExperience("Bad")} /><LabelText>{"Bad"}</LabelText></RadioLabel>
  <TextArea value={comments} onChange={(e) => setComments(e.target.value)}/>
  <Button color={"primary"} onClick={handleSubmit}>{"Submit Feedback"}</Button>
</div>

