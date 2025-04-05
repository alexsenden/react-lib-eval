<div style={{display: 'flex', flexDirection: 'column'}}>
  <Card >
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={"https://picsum.photos/100"} alt={"User Avatar"} />
      <Text type={"title"} text={"Alex Smith"} />
    </div>
  </Card>

  <Text type={"title"} text={"Privacy Settings"} />
  <Toggle isActive={isPublic} />
  <Select value={messageAccess} options={[{ "value": "Everyone", "label": "Everyone" }, { "value": "Friends Only", "label": "Friends Only" }, { "value": "No One", "label": "No One" }]} />

  <Button text={"Save Settings"} type={"primary"} onClick={() => setShowSaved(true)} />

  {showSaved && (
    <Toast message={"Settings saved successfully!"} type={"success"} onClose={() => setShowSaved(false)} />
  )}
</div>

