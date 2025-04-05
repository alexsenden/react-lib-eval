<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Subscribe to our Newsletter"}</Text>
  <TextInput labelText={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />
  <Checkbox labelText={"Receive weekly updates"} onChange={() => setWeeklyUpdates(!weeklyUpdates)} checked={weeklyUpdates} />
  <Button kind='primary' onClick={() => setSubscribed(true)} >{"Subscribe"}</Button>
  <ToastNotification kind={"success"} onClose={() => setSubscribed(false)} title={"Thank you for subscribing!"} />
</div>
