<div style={{display: 'flex', flexDirection: 'column'}}>
  <ToggleSwitch checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} />
  <Badge color={notificationsEnabled ? 'success' : 'failure'}>{notificationsEnabled ? "Enabled" : "Disabled"}</Badge>
</div>

