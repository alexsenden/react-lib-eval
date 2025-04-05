<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Select Language"}</Text>
  <Select value={language} options={[{"value": "English", "label": "English"}, {"value": "Spanish", "label": "Spanish"}, {"value": "German", "label": "German"}, {"value": "French", "label": "French"}]} />
  <Button onClick={() => setConfirmed(true)} tone='success' >{"Confirm"}</Button>
  <Toast content={`Language set to `} onDismiss={() => setConfirmed(false)} />
</div>
