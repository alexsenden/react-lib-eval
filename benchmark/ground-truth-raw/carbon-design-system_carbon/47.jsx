<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Select onChange={(e) => setTheme(e.target.value)} defaultValue={theme} ><SelectItem value='Light' text='Light' /><SelectItem value='Dark' text='Dark' /><SelectItem value='Solarized' text='Solarized' /></Select>

    <Toggle onToggle={() => setHighContrast(!highContrast)} />

    <Text as='p' >{`Preview text in  mode`}</Text>

    <Button kind='primary' onClick={() => setShowModal(true)} >{"Apply Settings"}</Button>

    <Modal modalHeading={"Success"} open={showModal} onRequestClose={() => setShowModal(false)} >{<Text as='p' >{"Theme applied."}</Text>}</Modal>
  </div>
</Card>

