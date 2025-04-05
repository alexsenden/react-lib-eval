<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Billing Info"}</Text>

    <TextInput placeholder={"**** **** **** 1234"} onChange={(e) => setCardNumber(e.target.value)} value={cardNumber} />

    <DatePicker value=${expiry} onChange=${(val) => setExpiry(val)} />

    <Checkbox labelText={"Save card for future use"} onChange={() => setSaveCard(!saveCard)} checked={saveCard} />

    <Toggle onToggle={() => setAutoBill(!autoBill)} />

    <Button kind='primary' onClick={() => setShowToast(true)} >{"Confirm Payment"}</Button>

    {showToast && (
      <ToastNotification kind={"success"} onClose={() => setShowToast(false)} title={"Payment successful"} />
    )}
  </div>
</Card>

