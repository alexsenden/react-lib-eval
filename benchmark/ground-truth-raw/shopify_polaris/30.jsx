<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button onClick={() => setShowNotifications(true)} tone='success' >{"View Notifications"}</Button>
  <Modal open={showNotifications} onClose={() => setShowNotifications(false)} title={"Notification Center"} ><Modal.Section>{ <div style={{"display": "flex", "flexDirection": "column"}}> <Text as='h1' >{"Your Notifications"}</Text> <List ordered ><List.Item>{notifications}</List.Item></List> </div> }</Modal.Section></Modal>
</div>

