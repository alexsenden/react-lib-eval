<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"User Preferences"} />
    <Toggle isActive={darkMode} />
    <Checkbox label={"Enable 2FA"} checked={twoFA} onChange={() => setTwoFA(!twoFA)} />
    <Select value={timeZone} options={[{"value": "PST", "label": "PST"}, {"value": "EST", "label": "EST"}, {"value": "GMT", "label": "GMT"}]} />
    <Button text={"Save Settings"} type={'primary'} onClick={handleSave} />
  </div>
</Card>

