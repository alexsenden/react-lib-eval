<div style={{display: 'flex', flexDirection: 'column'}}>
  <ToggleSwitch checked={advanced} onChange={() => setAdvanced(!advanced)} />

  {advanced ? (
    <Card>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text type={"title"} text={"Advanced Settings"} />
        <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={experimental} onChange={() => setExperimental(!experimental)} /><Text content={"Enable experimental features"} type='body' /></div>
        <Spinner />
      </div>
    </Card>
  ) : (
    <Card>
      <Text type={"body"} text={"Basic settings are enabled."} />
    </Card>
  )}
</div>

