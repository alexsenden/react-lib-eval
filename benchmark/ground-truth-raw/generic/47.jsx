<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Select value={theme} options={[ {"value": "Light", "label": "Light"}, {"value": "Dark", "label": "Dark"}, {"value": "Solarized", "label": "Solarized"} ]} onChange={(e) => setTheme(e.target.value)} />

    <Toggle isActive={highContrast} />

    <Text type={"body"} text={`Preview text in  mode`} />

    <Button text={"Apply Settings"} type={"primary"} onClick={() => setShowModal(true)} />

    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Success"} content={<Text type={"body"} text={"Theme applied."} />} />
  </div>
</Card>

