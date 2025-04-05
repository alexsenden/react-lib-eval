<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Select Language"}</Text>

  <Select defaultValue={language} onChange={(val) => { setLanguage(val); setShowToast(true); }} ><option>English</option><option>Spanish</option><option>German</option><option>Japanese</option></Select>

  {showToast && (
    <Toast colorScheme={"info"} onRemoveClick={() => setShowToast(false)} >{`Language changed to `}</Toast>
  )}
</div>

