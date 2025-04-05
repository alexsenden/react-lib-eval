<div style={{display: 'flex', flexDirection: 'column'}}>
  <Checkbox label={"Enable Notifications"} checked={notifications} onChange={() => setNotifications(!notifications)} />

  <Text as='h1' >{"Theme Selection"}</Text>
  <RadioButton checked={theme === "light"} label={"Light"} onChange={() => setTheme("light")} />
  <RadioButton checked={theme === "dark"} label={"Dark"} onChange={() => setTheme("dark")} />
  <RadioButton checked={theme === "system"} label={"System"} onChange={() => setTheme("system")} />

  <Text as='h1' >{"Preferred Language"}</Text>
  <Select value={'English'} options={[{"value": "English", "label": "English"}, {"value": "Spanish", "label": "Spanish"}, {"value": "French", "label": "French"}]} />

  <Text as='h1' >{"Auto-Updates"}</Text>
  <Toggle isActive={autoUpdate} />
</div>
