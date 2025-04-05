<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle onToggle={() => setNotificationsEnabled(!notificationsEnabled)} />
  <Badge text={notificationsEnabled ? "Enabled" : "Disabled"} type={notificationsEnabled ? "success" : "error"} />
</div>

