<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select value={language} options={[ {"value": "English", "label": "English"}, {"value": "German", "label": "German"}, {"value": "Japanese", "label": "Japanese"} ]} onChange={(e) => setLanguage(e.target.value)} />

  <Text type={"body"} text={`You have selected: `} />

  {language === "Japanese" && (
    <Badge text={"Beta"} type={"warning"} />
  )}
</div>

