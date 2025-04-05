<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Upcoming Reminder"} />
    <Text type={"body"} text={"Dentist appointment at 3:00 PM"} />
    <Button text={"Snooze"} type={"warning"} onClick={() => setShowToast(true)} />
    <Toast message={"Reminder snoozed for 10 minutes"} type={"info"} onClose={() => setShowToast(false)} />
  </div>
</Card>
