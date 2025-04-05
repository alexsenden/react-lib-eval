<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Select value={theme} onChange={(e) => setTheme(e.target.value)} ><option>Light</option><option>Dark</option><option>Solarized</option></Select>

    <ToggleSwitch checked={highContrast} onChange={() => setHighContrast(!highContrast)} />

    <Text type={"body"} text={`Preview text in  mode`} />

    <Button color='info' onClick={() => setShowModal(true)} >{"Apply Settings"}</Button>

    <Modal onClose={() => setShowModal(false)} popup={showModal} ><Modal.Header>{"Success"}</Modal.Header><Modal.Body>{<Text type={"body"} text={"Theme applied."} />}</Modal.Body></Modal>
  </div>
</Card>

