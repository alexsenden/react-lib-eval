<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Subscribe to our Newsletter"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={weeklyUpdates} onChange={() => setWeeklyUpdates(!weeklyUpdates)} /><Text content={"Receive weekly updates"} type='body' /></div>
  <Button color='info' onClick={() => setSubscribed(true)} >{"Subscribe"}</Button>
  <Toast >{"Thank you for subscribing!"}</Toast>
</div>
