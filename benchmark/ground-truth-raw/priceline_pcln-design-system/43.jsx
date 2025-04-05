<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isOn={advanced} onToggle={() => setAdvanced(!advanced)} />

  {advanced ? (
    <Card>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text textStyle='title1' >{"Advanced Settings"}</Text>
        <StyledLabel><Checkbox defaultChecked={experimental} onChange={() => setExperimental(!experimental)} />{"Enable experimental features"}</StyledLabel>
        <Spinner />
      </div>
    </Card>
  ) : (
    <Card>
      <Text textStyle='paragraph' >{"Basic settings are enabled."}</Text>
    </Card>
  )}
</div>

