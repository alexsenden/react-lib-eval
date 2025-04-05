<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Subscribe to our Newsletter"} />
  <Input value={email} label={"Email"} onChange={(e) => setEmail(e.target.value)} />
  <Checkbox label={"Receive weekly updates"} checked={weeklyUpdates} onChange={() => setWeeklyUpdates(!weeklyUpdates)} />
  <Button text={"Subscribe"} type={"primary"} onClick={() => setSubscribed(true)} />
  <Toast message={"Thank you for subscribing!"} type={"success"} onClose={() => setSubscribed(false)} />
</div>
