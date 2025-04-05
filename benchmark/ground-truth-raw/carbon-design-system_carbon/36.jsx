<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Select Language"}</Text>

  <Select onChange={(val) => { setLanguage(val); setShowToast(true); }} defaultValue={language} ><SelectItem value='English' text='English' /><SelectItem value='Spanish' text='Spanish' /><SelectItem value='German' text='German' /><SelectItem value='Japanese' text='Japanese' /></Select>

  {showToast && (
    <ToastNotification kind={"info"} onClose={() => setShowToast(false)} title={`Language changed to `} />
  )}
</div>

