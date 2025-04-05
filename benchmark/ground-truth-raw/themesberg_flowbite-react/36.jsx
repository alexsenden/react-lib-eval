<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Select Language"} />

  <Select value={language} onChange={(val) => { setLanguage(val); setShowToast(true); }} ><option>English</option><option>Spanish</option><option>German</option><option>Japanese</option></Select>

  {showToast && (
    <Toast >{`Language changed to `}</Toast>
  )}
</div>

