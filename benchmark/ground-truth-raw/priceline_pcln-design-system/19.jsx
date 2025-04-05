<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text textStyle='title1' >{"Upcoming Reminder"}</Text>
    <Text textStyle='paragraph' >{"Dentist appointment at 3:00 PM"}</Text>
    <Button color={"warning"} onClick={() => setShowToast(true)}>{"Snooze"}</Button>
    <Toast colorScheme={"info"} onRemoveClick={() => setShowToast(false)} >{"Reminder snoozed for 10 minutes"}</Toast>
  </div>
</Card>
