<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Daily Habits Survey"} />
  <Text type={"body"} text={"Do you exercise daily?"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={exercise === "Yes"} onChange={() => setExercise("Yes")}/><Text content={"Yes"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={exercise === "No"} onChange={() => setExercise("No")}/><Text content={"No"} type='body' /></div>
  <Text type={"body"} text={"Favorite Fruit"} />
  <Select value={fruit} ><option>Apple</option><option>Banana</option><option>Orange</option></Select>
  <Button color='info' onClick={() => setSubmitted(true)} >{"Submit Survey"}</Button>
  <Toast >{"Survey submitted. Thank you!"}</Toast>
</div>

