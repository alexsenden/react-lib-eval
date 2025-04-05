<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Subscribe to our Newsletter"}</Text>
  <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
  <Checkbox label={"Receive weekly updates"} checked={weeklyUpdates} onChange={() => setWeeklyUpdates(!weeklyUpdates)} />
  <Button onClick={() => setSubscribed(true)} tone='success' >{"Subscribe"}</Button>
  <Toast content={"Thank you for subscribing!"} onDismiss={() => setSubscribed(false)} />
</div>
