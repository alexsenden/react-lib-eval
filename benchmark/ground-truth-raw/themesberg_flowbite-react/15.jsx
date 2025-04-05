<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Select Language"} />
  <Select value={language} ><option>English</option><option>Spanish</option><option>German</option><option>French</option></Select>
  <Button color='info' onClick={() => setConfirmed(true)} >{"Confirm"}</Button>
  <Toast >{`Language set to `}</Toast>
</div>
