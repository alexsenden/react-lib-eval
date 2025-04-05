<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text textStyle='title1' >{"Select Language"}</Text>
  <Select defaultValue={language} ><option>English</option><option>Spanish</option><option>German</option><option>French</option></Select>
  <Button color={"primary"} onClick={() => setConfirmed(true)}>{"Confirm"}</Button>
  <Toast colorScheme={"info"} onRemoveClick={() => setConfirmed(false)} >{`Language set to `}</Toast>
</div>
