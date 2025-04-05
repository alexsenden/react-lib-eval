<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isOn={notificationsEnabled} onToggle={() => setNotificationsEnabled(!notificationsEnabled)} />
  <Badge bg={notificationsEnabled ? 'green' : 'red'} >{notificationsEnabled ? "Enabled" : "Disabled"}</Badge>
</div>

