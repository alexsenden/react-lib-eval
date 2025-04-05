<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button color={"primary"} onClick={() => setShowNotifications(true)}>{"View Notifications"}</Button>
  <Modal isOpen={showNotifications} onClose={() => setShowNotifications(false)} title={"Notification Center"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <Text textStyle='title1' >{"Your Notifications"}</Text> <List.ol ><li>{notifications}</li></List.ol> </div> } />
</div>

