<div style={{display: 'flex', flexDirection: 'column'}}>
  <Card >
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar source={"https://picsum.photos/100"} accessibilityLabel={"User Avatar"} />
      <Text as='h1' >{"Alex Smith"}</Text>
    </div>
  </Card>

  <Text as='h1' >{"Privacy Settings"}</Text>
  <Toggle isActive={isPublic} />
  <Select value={messageAccess} options={[{ "value": "Everyone", "label": "Everyone" }, { "value": "Friends Only", "label": "Friends Only" }, { "value": "No One", "label": "No One" }]} />

  <Button onClick={() => setShowSaved(true)} tone='success' >{"Save Settings"}</Button>

  {showSaved && (
    <Toast content={"Settings saved successfully!"} onDismiss={() => setShowSaved(false)} />
  )}
</div>

