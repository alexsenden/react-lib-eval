<div style={{"display": "flex", "flexDirection": "column"}}>
  <TextInput labelText={"Name"} onChange={(e) => setName(e.target.value)} value={name} />
  <TextInput labelText={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />
  <Text as='h1' >{"Would you like to be contacted?"}</Text>
  <Toggle onToggle={() => setContactOptIn(!contactOptIn)} />
  {contactOptIn && ( 
    <Checkbox labelText={"Subscribe to newsletter"} onChange={() =>setSubscribe(!subscribe)} checked={subscribe} />
  )} 
  <Text as='h1' >{"How was your experience?"}</Text>
  <RadioButton labelText={"Good"} checked={experience === "Good"} onChange={() => setExperience("Good")} />
  <RadioButton labelText={"Neutral"} checked={experience === "Neutral"} onChange={() => setExperience("Neutral")} />
  <RadioButton labelText={"Bad"} checked={experience === "Bad"} onChange={() => setExperience("Bad")} />
  <TextArea value={comments} onChange={(e) => setComments(e.target.value)} />
  <Button kind='primary' onClick={handleSubmit} >{"Submit Feedback"}</Button>
</div>

