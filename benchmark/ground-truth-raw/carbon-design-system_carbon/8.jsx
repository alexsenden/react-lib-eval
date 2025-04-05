<div style={{display: 'flex', flexDirection: 'column'}}>
  <Card >
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={"https://picsum.photos/100"} alt={"User Avatar"} />
      <Text as='h1' >{"Alex Smith"}</Text>
    </div>
  </Card>

  <Text as='h1' >{"Privacy Settings"}</Text>
  <Toggle onToggle={() => setIsPublic(!isPublic)} />
  <Select defaultValue={messageAccess} ><SelectItem value='Everyone' text='Everyone' /><SelectItem value='Friends Only' text='Friends Only' /><SelectItem value='No One' text='No One' /></Select>

  <Button kind='primary' onClick={() => setShowSaved(true)} >{"Save Settings"}</Button>

  {showSaved && (
    <ToastNotification kind={"success"} onClose={() => setShowSaved(false)} title={"Settings saved successfully!"} />
  )}
</div>

