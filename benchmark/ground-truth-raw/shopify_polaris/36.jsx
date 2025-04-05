<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Select Language"}</Text>

  <Select value={language} options={[{"value": "English", "label": "English"}, {"value": "Spanish", "label": "Spanish"}, {"value": "German", "label": "German"}, {"value": "Japanese", "label": "Japanese"}]} onChange={(val) => { setLanguage(val); setShowToast(true); }} />

  {showToast && (
    <Toast content={`Language changed to `} onDismiss={() => setShowToast(false)} />
  )}
</div>

