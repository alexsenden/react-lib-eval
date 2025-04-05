<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Upcoming Reminder"}</Text>
    <Text as='p' >{"Dentist appointment at 3:00 PM"}</Text>
    <Button onClick={() => setShowToast(true)} tone='critical' >{"Snooze"}</Button>
    <Toast content={"Reminder snoozed for 10 minutes"} onDismiss={() => setShowToast(false)} />
  </div>
</Card>
