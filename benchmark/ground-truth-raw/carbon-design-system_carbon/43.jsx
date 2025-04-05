<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle onToggle={() => setAdvanced(!advanced)} />

  {advanced ? (
    <Card >
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text as='h1' >{"Advanced Settings"}</Text>
        <Checkbox labelText={"Enable experimental features"} onChange={() => setExperimental(!experimental)} checked={experimental} />
        <Loading />
      </div>
    </Card>
  ) : (
    <Card >
      <Text as='p' >{"Basic settings are enabled."}</Text>
    </Card>
  )}
</div>

