<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button kind='primary' onClick={() => setShowNotifications(true)} >{"View Notifications"}</Button>
  <Modal modalHeading={"Notification Center"} open={showNotifications} onRequestClose={() => setShowNotifications(false)} >{ <div style={{"display": "flex", "flexDirection": "column"}}> <Text as='h1' >{"Your Notifications"}</Text> <UnorderedList ><ListItem>{notifications}</ListItem></UnorderedList> </div> }</Modal>
</div>

