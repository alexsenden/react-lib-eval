<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Daily Habits Survey"}</Text>
  <Text textStyle='paragraph' >{"Do you exercise daily?"}</Text>
  <RadioLabel><Radio checked={exercise === "Yes"} onChange={() => setExercise("Yes")} /><LabelText>{"Yes"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={exercise === "No"} onChange={() => setExercise("No")} /><LabelText>{"No"}</LabelText></RadioLabel>
  <Text textStyle='paragraph' >{"Favorite Fruit"}</Text>
  <Select defaultValue={fruit} ><option>Apple</option><option>Banana</option><option>Orange</option></Select>
  <Button color={"primary"} onClick={() => setSubmitted(true)}>{"Submit Survey"}</Button>
  <Toast colorScheme={"success"} onRemoveClick={() => setSubmitted(false)} >{"Survey submitted. Thank you!"}</Toast>
</div>

