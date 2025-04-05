<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Avatar img={"https://picsum.photos/100"} alt={"User Avatar"} />
    <Badge color={isOnline ? 'success' : 'failure'}>{isOnline ? "Online" : "Offline"}</Badge>
    <Button color='info' onClick={() => { setIsOnline(!isOnline); setShowToast(true); }} >{"Toggle Status"}</Button>
    {showToast && (
      <Toast >{"Status updated."}</Toast>
    )}
  </div>
</Card>

