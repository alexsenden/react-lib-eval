<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button text={"View Notifications"} type={"primary"} onClick={() => setShowNotifications(true)} />
  <Modal isOpen={showNotifications} onClose={() => setShowNotifications(false)} title={"Notification Center"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <Text type={"title"} text={"Your Notifications"} /> <List items={notifications} /> </div> } />
</div>

