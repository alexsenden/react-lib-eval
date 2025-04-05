<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={selectedBadge === "Pro"} onChange={() => setSelectedBadge("Pro")}/><Text content={"Pro"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={selectedBadge === "Beginner"} onChange={() => setSelectedBadge("Beginner")}/><Text content={"Beginner"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Radio checked={selectedBadge === "Mentor"} onChange={() => setSelectedBadge("Mentor")}/><Text content={"Mentor"} type='body' /></div>

  {selectedBadge && (
    <Badge color={selectedBadge === "Pro" ? 'success' : selectedBadge === "Beginner" ? 'warning' : "info"}>{selectedBadge}</Badge>
  )}

  <Button color='info' onClick={() => setShowModal(true)} >{"Save Badge"}</Button>

  <Modal onClose={() => setShowModal(false)} popup={showModal} ><Modal.Header>{"Saved"}</Modal.Header><Modal.Body>{<Text type={"body"} text={"Badge saved successfully."} />}</Modal.Body></Modal>
</div>
