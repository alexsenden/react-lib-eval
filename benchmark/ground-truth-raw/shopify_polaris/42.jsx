<div style={{display: 'flex', flexDirection: 'column'}}>
  <RadioButton checked={selectedBadge === "Pro"} label={"Pro"} onChange={() => setSelectedBadge("Pro")} />
  <RadioButton checked={selectedBadge === "Beginner"} label={"Beginner"} onChange={() => setSelectedBadge("Beginner")} />
  <RadioButton checked={selectedBadge === "Mentor"} label={"Mentor"} onChange={() => setSelectedBadge("Mentor")} />

  {selectedBadge && (
    <Badge tone={selectedBadge === "Pro" ? 'success' : selectedBadge === "Beginner" ? 'warning' : "info"} >{selectedBadge}</Badge>
  )}

  <Button onClick={() => setShowModal(true)} tone='success' >{"Save Badge"}</Button>

  <Modal open={showModal} onClose={() => setShowModal(false)} title={"Saved"} ><Modal.Section>{<Text as='p' >{"Badge saved successfully."}</Text>}</Modal.Section></Modal>
</div>
