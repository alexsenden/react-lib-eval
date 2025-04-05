<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Select value={theme} options={[ {"value": "Light", "label": "Light"}, {"value": "Dark", "label": "Dark"}, {"value": "Solarized", "label": "Solarized"} ]} onChange={(e) => setTheme(e.target.value)} />

    <Toggle isActive={highContrast} />

    <Text as='p' >{`Preview text in  mode`}</Text>

    <Button onClick={() => setShowModal(true)} tone='success' >{"Apply Settings"}</Button>

    <Modal open={showModal} onClose={() => setShowModal(false)} title={"Success"} ><Modal.Section>{<Text as='p' >{"Theme applied."}</Text>}</Modal.Section></Modal>
  </div>
</Card>

