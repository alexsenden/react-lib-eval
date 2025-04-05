<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isActive={advanced} />

  {advanced ? (
    <Card >
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text as='h1' >{"Advanced Settings"}</Text>
        <Checkbox label={"Enable experimental features"} checked={experimental} onChange={() => setExperimental(!experimental)} />
        <Spinner />
      </div>
    </Card>
  ) : (
    <Card >
      <Text as='p' >{"Basic settings are enabled."}</Text>
    </Card>
  )}
</div>

