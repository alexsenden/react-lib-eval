<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Avatar source={"https://picsum.photos/100"} accessibilityLabel={"User Avatar"} />
    <Badge tone={isOnline ? 'success' : 'critical'} >{isOnline ? "Online" : "Offline"}</Badge>
    <Button onClick={() => { setIsOnline(!isOnline); setShowToast(true); }} tone='success' >{"Toggle Status"}</Button>
    {showToast && (
      <Toast content={"Status updated."} onDismiss={() => setShowToast(false)} />
    )}
  </div>
</Card>

