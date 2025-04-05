<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Daily Habits Survey"}</Text>
  <Text as='p' >{"Do you exercise daily?"}</Text>
  <RadioButton checked={exercise === "Yes"} label={"Yes"} onChange={() => setExercise("Yes")} />
  <RadioButton checked={exercise === "No"} label={"No"} onChange={() => setExercise("No")} />
  <Text as='p' >{"Favorite Fruit"}</Text>
  <Select value={fruit} options={[{"value": "Apple", "label": "Apple"}, {"value": "Banana", "label": "Banana"}, {"value": "Orange", "label": "Orange"}]} />
  <Button onClick={() => setSubmitted(true)} tone='success' >{"Submit Survey"}</Button>
  <Toast content={"Survey submitted. Thank you!"} onDismiss={() => setSubmitted(false)} />
</div>

