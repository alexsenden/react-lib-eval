<div style={{display: 'flex', flexDirection: 'column'}}>
  <Card>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar img={"https://picsum.photos/100"} alt={"User Avatar"} />
      <Text type={"title"} text={"Alex Smith"} />
    </div>
  </Card>

  <Text type={"title"} text={"Privacy Settings"} />
  <ToggleSwitch checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
  <Select value={messageAccess} ><option>Everyone</option><option>Friends Only</option><option>No One</option></Select>

  <Button color='info' onClick={() => setShowSaved(true)} >{"Save Settings"}</Button>

  {showSaved && (
    <Toast >{"Settings saved successfully!"}</Toast>
  )}
</div>

