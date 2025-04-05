<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Daily Habits Survey"} />
  <Text type={"body"} text={"Do you exercise daily?"} />
  <RadioButton checked={exercise === "Yes"} label={"Yes"} onChange={() => setExercise("Yes")} />
  <RadioButton checked={exercise === "No"} label={"No"} onChange={() => setExercise("No")} />
  <Text type={"body"} text={"Favorite Fruit"} />
  <Select value={fruit} options={[{"value": "Apple", "label": "Apple"}, {"value": "Banana", "label": "Banana"}, {"value": "Orange", "label": "Orange"}]} />
  <Button text={"Submit Survey"} type={"primary"} onClick={() => setSubmitted(true)} />
  <Toast message={"Survey submitted. Thank you!"} type={"success"} onClose={() => setSubmitted(false)} />
</div>

