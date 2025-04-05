<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"User Preferences"}</Text>
    <Toggle onToggle={() => setDarkMode(!darkMode)} />
    <Checkbox labelText={"Enable 2FA"} onChange={() => setTwoFA(!twoFA)} checked={twoFA} />
    <Select defaultValue={timeZone} ><SelectItem value='PST' text='PST' /><SelectItem value='EST' text='EST' /><SelectItem value='GMT' text='GMT' /></Select>
    <Button kind='primary' onClick={handleSave} >{"Save Settings"}</Button>
  </div>
</Card>

