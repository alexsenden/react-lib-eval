<div style={{display: 'flex', flexDirection: 'column'}}>
  <Select onChange={(e) => setLanguage(e.target.value)} defaultValue={language} ><SelectItem value='English' text='English' /><SelectItem value='German' text='German' /><SelectItem value='Japanese' text='Japanese' /></Select>

  <Text as='p' >{`You have selected: `}</Text>

  {language === "Japanese" && (
    <Badge text={"Beta"} type={"warning"} />
  )}
</div>

