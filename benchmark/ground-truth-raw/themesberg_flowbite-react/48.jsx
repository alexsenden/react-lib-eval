<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Billing Info"} />

    <div style={{display: 'flex', flexDirection: 'row'}}><Input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder={"**** **** **** 1234"}/><Text type='body' /></div>

    <DatePicker value=${expiry} onChange=${(val) => setExpiry(val)} />

    <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={saveCard} onChange={() => setSaveCard(!saveCard)} /><Text content={"Save card for future use"} type='body' /></div>

    <ToggleSwitch checked={autoBill} onChange={() => setAutoBill(!autoBill)} />

    <Button color='info' onClick={() => setShowToast(true)} >{"Confirm Payment"}</Button>

    {showToast && (
      <Toast >{"Payment successful"}</Toast>
    )}
  </div>
</Card>

