<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Select Language"} />

  <Select value={language} options={[{"value": "English", "label": "English"}, {"value": "Spanish", "label": "Spanish"}, {"value": "German", "label": "German"}, {"value": "Japanese", "label": "Japanese"}]} onChange={(val) => { setLanguage(val); setShowToast(true); }} />

  {showToast && (
    <Toast message={`Language changed to `} type={"info"} onClose={() => setShowToast(false)} />
  )}
</div>

