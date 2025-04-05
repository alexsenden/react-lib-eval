<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isActive={notificationsEnabled} />
  <Badge text={notificationsEnabled ? "Enabled" : "Disabled"} type={notificationsEnabled ? "success" : "error"} />
</div>

