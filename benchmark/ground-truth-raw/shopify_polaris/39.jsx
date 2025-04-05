<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isActive={notificationsEnabled} />
  <Badge tone={notificationsEnabled ? 'success' : 'critical'} >{notificationsEnabled ? "Enabled" : "Disabled"}</Badge>
</div>

