<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isActive={advanced} />

  {advanced ? (
    <Card >
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text type={"title"} text={"Advanced Settings"} />
        <Checkbox label={"Enable experimental features"} checked={experimental} onChange={() => setExperimental(!experimental)} />
        <Spinner />
      </div>
    </Card>
  ) : (
    <Card >
      <Text type={"body"} text={"Basic settings are enabled."} />
    </Card>
  )}
</div>

