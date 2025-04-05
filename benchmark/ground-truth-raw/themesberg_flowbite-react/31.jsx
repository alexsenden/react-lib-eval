<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"User Preferences"} />
    <ToggleSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={twoFA} onChange={() => setTwoFA(!twoFA)} /><Text content={"Enable 2FA"} type='body' /></div>
    <Select value={timeZone} ><option>PST</option><option>EST</option><option>GMT</option></Select>
    <Button color='info' onClick={handleSave} >{"Save Settings"}</Button>
  </div>
</Card>

