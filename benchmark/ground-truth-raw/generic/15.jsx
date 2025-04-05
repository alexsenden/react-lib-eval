<div style={{display: 'flex', flexDirection: 'column'}}>
  <Text type={"title"} text={"Select Language"} />
  <Select value={language} options={[{"value": "English", "label": "English"}, {"value": "Spanish", "label": "Spanish"}, {"value": "German", "label": "German"}, {"value": "French", "label": "French"}]} />
  <Button text={"Confirm"} type={"primary"} onClick={() => setConfirmed(true)} />
  <Toast message={`Language set to `} type={"info"} onClose={() => setConfirmed(false)} />
</div>
