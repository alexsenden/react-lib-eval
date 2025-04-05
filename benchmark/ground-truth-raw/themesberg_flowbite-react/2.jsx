<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={notifications} onChange={() => setNotifications(!notifications)} /><Text content={"Enable Notifications"} type='body' /></div>

  <Text type={"title"} text={"Theme Selection"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={theme === "light"} onChange={() => setTheme("light")}/><Text content={"Light"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={theme === "dark"} onChange={() => setTheme("dark")}/><Text content={"Dark"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={theme === "system"} onChange={() => setTheme("system")}/><Text content={"System"} type='body' /></div>

  <Text type={"title"} text={"Preferred Language"} />
  <Select value={'English'} ><option>English</option><option>Spanish</option><option>French</option></Select>

  <Text type={"title"} text={"Auto-Updates"} />
  <ToggleSwitch checked={autoUpdate} onChange={() => setAutoUpdate(!autoUpdate)} />
</div>
