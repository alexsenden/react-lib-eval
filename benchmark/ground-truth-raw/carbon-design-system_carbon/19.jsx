<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Upcoming Reminder"}</Text>
    <Text as='p' >{"Dentist appointment at 3:00 PM"}</Text>
    <Button kind='danger' onClick={() => setShowToast(true)} >{"Snooze"}</Button>
    <ToastNotification kind={"info"} onClose={() => setShowToast(false)} title={"Reminder snoozed for 10 minutes"} />
  </div>
</Card>
