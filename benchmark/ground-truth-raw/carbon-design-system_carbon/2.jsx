<div style={{display: 'flex', flexDirection: 'column'}}>
  <Checkbox labelText={"Enable Notifications"} onChange={() => setNotifications(!notifications)} checked={notifications} />

  <Text as='h1' >{"Theme Selection"}</Text>
  <RadioButton labelText={"Light"} checked={theme === "light"} onChange={() => setTheme("light")} />
  <RadioButton labelText={"Dark"} checked={theme === "dark"} onChange={() => setTheme("dark")} />
  <RadioButton labelText={"System"} checked={theme === "system"} onChange={() => setTheme("system")} />

  <Text as='h1' >{"Preferred Language"}</Text>
  <Select defaultValue={'English'} ><SelectItem value='English' text='English' /><SelectItem value='Spanish' text='Spanish' /><SelectItem value='French' text='French' /></Select>

  <Text as='h1' >{"Auto-Updates"}</Text>
  <Toggle onToggle={() => setAutoUpdate(!autoUpdate)} />
</div>
