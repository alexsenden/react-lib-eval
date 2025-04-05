<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Avatar altText={"User Avatar"} src={"https://picsum.photos/100"} size='40' />
    <Badge bg={isOnline ? 'green' : 'red'} >{isOnline ? "Online" : "Offline"}</Badge>
    <Button color={"primary"} onClick={() => { setIsOnline(!isOnline); setShowToast(true); }}>{"Toggle Status"}</Button>
    {showToast && (
      <Toast colorScheme={"info"} onRemoveClick={() => setShowToast(false)} >{"Status updated."}</Toast>
    )}
  </div>
</Card>

