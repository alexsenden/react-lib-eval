<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select value={language} onChange={(e) => setLanguage(e.target.value)} ><option>English</option><option>German</option><option>Japanese</option></Select>

  <Text type={"body"} text={`You have selected: `} />

  {language === "Japanese" && (
    <Badge color={'warning'}>{"Beta"}</Badge>
  )}
</div>

