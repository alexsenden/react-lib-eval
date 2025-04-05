<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text textStyle='title1' >{"Billing Info"}</Text>

    <Label><Input placeholder={"**** **** **** 1234"} onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}/></Label>

    <DatePicker value=${expiry} onChange=${(val) => setExpiry(val)} />

    <StyledLabel><Checkbox defaultChecked={saveCard} onChange={() => setSaveCard(!saveCard)} />{"Save card for future use"}</StyledLabel>

    <Toggle isOn={autoBill} onToggle={() => setAutoBill(!autoBill)} />

    <Button color={"primary"} onClick={() => setShowToast(true)}>{"Confirm Payment"}</Button>

    {showToast && (
      <Toast colorScheme={"success"} onRemoveClick={() => setShowToast(false)} >{"Payment successful"}</Toast>
    )}
  </div>
</Card>

