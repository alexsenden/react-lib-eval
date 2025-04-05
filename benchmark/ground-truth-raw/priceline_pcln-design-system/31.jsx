<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text textStyle='title1' >{"User Preferences"}</Text>
    <Toggle isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
    <StyledLabel><Checkbox defaultChecked={twoFA} onChange={() => setTwoFA(!twoFA)} />{"Enable 2FA"}</StyledLabel>
    <Select defaultValue={timeZone} ><option>PST</option><option>EST</option><option>GMT</option></Select>
    <Button color={'primary'} onClick={handleSave}>{"Save Settings"}</Button>
  </div>
</Card>

