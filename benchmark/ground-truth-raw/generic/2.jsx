<div style={{display: 'flex', flexDirection: 'column'}}>
  <Checkbox label={"Enable Notifications"} checked={notifications} onChange={() => setNotifications(!notifications)} />

  <Text type={"title"} text={"Theme Selection"} />
  <RadioButton checked={theme === "light"} label={"Light"} onChange={() => setTheme("light")} />
  <RadioButton checked={theme === "dark"} label={"Dark"} onChange={() => setTheme("dark")} />
  <RadioButton checked={theme === "system"} label={"System"} onChange={() => setTheme("system")} />

  <Text type={"title"} text={"Preferred Language"} />
  <Select value={'English'} options={[{"value": "English", "label": "English"}, {"value": "Spanish", "label": "Spanish"}, {"value": "French", "label": "French"}]} />

  <Text type={"title"} text={"Auto-Updates"} />
  <Toggle isActive={autoUpdate} />
</div>
