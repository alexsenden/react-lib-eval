<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"User Preferences"}</Text>
    <Toggle isActive={darkMode} />
    <Checkbox label={"Enable 2FA"} checked={twoFA} onChange={() => setTwoFA(!twoFA)} />
    <Select value={timeZone} options={[{"value": "PST", "label": "PST"}, {"value": "EST", "label": "EST"}, {"value": "GMT", "label": "GMT"}]} />
    <Button onClick={handleSave} tone='success' >{"Save Settings"}</Button>
  </div>
</Card>

