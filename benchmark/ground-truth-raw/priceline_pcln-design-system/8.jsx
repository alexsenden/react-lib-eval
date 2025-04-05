<div style={{display: 'flex', flexDirection: 'column'}}>
  <Card>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar altText={"User Avatar"} src={"https://picsum.photos/100"} size='40' />
      <Text textStyle='title1' >{"Alex Smith"}</Text>
    </div>
  </Card>

  <Text textStyle='title1' >{"Privacy Settings"}</Text>
  <Toggle isOn={isPublic} onToggle={() => setIsPublic(!isPublic)} />
  <Select defaultValue={messageAccess} ><option>Everyone</option><option>Friends Only</option><option>No One</option></Select>

  <Button color={"primary"} onClick={() => setShowSaved(true)}>{"Save Settings"}</Button>

  {showSaved && (
    <Toast colorScheme={"success"} onRemoveClick={() => setShowSaved(false)} >{"Settings saved successfully!"}</Toast>
  )}
</div>

