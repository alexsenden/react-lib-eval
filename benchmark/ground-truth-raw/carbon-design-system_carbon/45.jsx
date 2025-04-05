<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Avatar src={"https://picsum.photos/100"} alt={"User Avatar"} />
    <Badge text={isOnline ? "Online" : "Offline"} type={isOnline ? "success" : "error"} />
    <Button kind='primary' onClick={() => { setIsOnline(!isOnline); setShowToast(true); }} >{"Toggle Status"}</Button>
    {showToast && (
      <ToastNotification kind={"info"} onClose={() => setShowToast(false)} title={"Status updated."} />
    )}
  </div>
</Card>

