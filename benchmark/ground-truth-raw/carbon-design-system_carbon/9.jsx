<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Daily Habits Survey"}</Text>
  <Text as='p' >{"Do you exercise daily?"}</Text>
  <RadioButton labelText={"Yes"} checked={exercise === "Yes"} onChange={() => setExercise("Yes")} />
  <RadioButton labelText={"No"} checked={exercise === "No"} onChange={() => setExercise("No")} />
  <Text as='p' >{"Favorite Fruit"}</Text>
  <Select defaultValue={fruit} ><SelectItem value='Apple' text='Apple' /><SelectItem value='Banana' text='Banana' /><SelectItem value='Orange' text='Orange' /></Select>
  <Button kind='primary' onClick={() => setSubmitted(true)} >{"Submit Survey"}</Button>
  <ToastNotification kind={"success"} onClose={() => setSubmitted(false)} title={"Survey submitted. Thank you!"} />
</div>

