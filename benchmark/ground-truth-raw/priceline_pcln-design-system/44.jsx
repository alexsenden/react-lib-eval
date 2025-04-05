<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select defaultValue={language} onChange={(e) => setLanguage(e.target.value)} ><option>English</option><option>German</option><option>Japanese</option></Select>

  <Text textStyle='paragraph' >{`You have selected: `}</Text>

  {language === "Japanese" && (
    <Badge bg={'orange'} >{"Beta"}</Badge>
  )}
</div>

