<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Subscribe to our Newsletter"}</Text>
  <Label>{"Email"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  <StyledLabel><Checkbox defaultChecked={weeklyUpdates} onChange={() => setWeeklyUpdates(!weeklyUpdates)} />{"Receive weekly updates"}</StyledLabel>
  <Button color={"primary"} onClick={() => setSubscribed(true)}>{"Subscribe"}</Button>
  <Toast colorScheme={"success"} onRemoveClick={() => setSubscribed(false)} >{"Thank you for subscribing!"}</Toast>
</div>
