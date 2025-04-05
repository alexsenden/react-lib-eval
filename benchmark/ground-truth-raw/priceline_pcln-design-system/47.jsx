<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Select defaultValue={theme} onChange={(e) => setTheme(e.target.value)} ><option>Light</option><option>Dark</option><option>Solarized</option></Select>

    <Toggle isOn={highContrast} onToggle={() => setHighContrast(!highContrast)} />

    <Text textStyle='paragraph' >{`Preview text in  mode`}</Text>

    <Button color={"primary"} onClick={() => setShowModal(true)}>{"Apply Settings"}</Button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Success"} content={<Text textStyle='paragraph' >{"Theme applied."}</Text>} />
  </div>
</Card>

