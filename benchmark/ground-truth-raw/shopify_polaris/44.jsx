<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select value={language} options={[ {"value": "English", "label": "English"}, {"value": "German", "label": "German"}, {"value": "Japanese", "label": "Japanese"} ]} onChange={(e) => setLanguage(e.target.value)} />

  <Text as='p' >{`You have selected: `}</Text>

  {language === "Japanese" && (
    <Badge tone={'warning'} >{"Beta"}</Badge>
  )}
</div>

