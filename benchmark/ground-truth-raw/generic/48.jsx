<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Billing Info"} />

    <Input value={cardNumber} placeholder={"**** **** **** 1234"} onChange={(e) => setCardNumber(e.target.value)} />

    <DatePicker value=${expiry} onChange=${(val) => setExpiry(val)} />

    <Checkbox label={"Save card for future use"} checked={saveCard} onChange={() => setSaveCard(!saveCard)} />

    <Toggle isActive={autoBill} />

    <Button text={"Confirm Payment"} type={"primary"} onClick={() => setShowToast(true)} />

    {showToast && (
      <Toast message={"Payment successful"} type={"success"} onClose={() => setShowToast(false)} />
    )}
  </div>
</Card>

