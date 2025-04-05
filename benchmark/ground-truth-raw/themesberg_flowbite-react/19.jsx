<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Upcoming Reminder"} />
    <Text type={"body"} text={"Dentist appointment at 3:00 PM"} />
    <Button color='warning' onClick={() => setShowToast(true)} >{"Snooze"}</Button>
    <Toast >{"Reminder snoozed for 10 minutes"}</Toast>
  </div>
</Card>
