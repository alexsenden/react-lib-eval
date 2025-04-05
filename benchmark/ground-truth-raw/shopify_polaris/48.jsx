<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Billing Info"}</Text>

    <TextField value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder={"**** **** **** 1234"} />

    <DatePicker value=${expiry} onChange=${(val) => setExpiry(val)} />

    <Checkbox label={"Save card for future use"} checked={saveCard} onChange={() => setSaveCard(!saveCard)} />

    <Toggle isActive={autoBill} />

    <Button onClick={() => setShowToast(true)} tone='success' >{"Confirm Payment"}</Button>

    {showToast && (
      <Toast content={"Payment successful"} onDismiss={() => setShowToast(false)} />
    )}
  </div>
</Card>

