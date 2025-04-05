<div style={{display: 'flex', flexDirection: 'column'}}>
  <StyledLabel><Checkbox defaultChecked={notifications} onChange={() => setNotifications(!notifications)} />{"Enable Notifications"}</StyledLabel>

  <Text textStyle='title1' >{"Theme Selection"}</Text>
  <RadioLabel><Radio checked={theme === "light"} onChange={() => setTheme("light")} /><LabelText>{"Light"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={theme === "dark"} onChange={() => setTheme("dark")} /><LabelText>{"Dark"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={theme === "system"} onChange={() => setTheme("system")} /><LabelText>{"System"}</LabelText></RadioLabel>

  <Text textStyle='title1' >{"Preferred Language"}</Text>
  <Select defaultValue={'English'} ><option>English</option><option>Spanish</option><option>French</option></Select>

  <Text textStyle='title1' >{"Auto-Updates"}</Text>
  <Toggle isOn={autoUpdate} onToggle={() => setAutoUpdate(!autoUpdate)} />
</div>
