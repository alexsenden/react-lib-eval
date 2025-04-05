<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button color='info' onClick={() => setShowNotifications(true)} >{"View Notifications"}</Button>
  <Modal onClose={() => setShowNotifications(false)} popup={showNotifications} ><Modal.Header>{"Notification Center"}</Modal.Header><Modal.Body>{ <div style={{"display": "flex", "flexDirection": "column"}}> <Text type={"title"} text={"Your Notifications"} /> <List ordered ><List.Item>{notifications}</List.Item></List> </div> }</Modal.Body></Modal>
</div>

