<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text as='h1' >{"Select Language"}</Text>
  <Select defaultValue={language} ><SelectItem value='English' text='English' /><SelectItem value='Spanish' text='Spanish' /><SelectItem value='German' text='German' /><SelectItem value='French' text='French' /></Select>
  <Button kind='primary' onClick={() => setConfirmed(true)} >{"Confirm"}</Button>
  <ToastNotification kind={"info"} onClose={() => setConfirmed(false)} title={`Language set to `} />
</div>
