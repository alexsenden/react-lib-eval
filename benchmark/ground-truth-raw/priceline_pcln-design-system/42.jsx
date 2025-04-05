<div style={{display: 'flex', flexDirection: 'column'}}>
  <RadioLabel><Radio checked={selectedBadge === "Pro"} onChange={() => setSelectedBadge("Pro")} /><LabelText>{"Pro"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={selectedBadge === "Beginner"} onChange={() => setSelectedBadge("Beginner")} /><LabelText>{"Beginner"}</LabelText></RadioLabel>
  <RadioLabel><Radio checked={selectedBadge === "Mentor"} onChange={() => setSelectedBadge("Mentor")} /><LabelText>{"Mentor"}</LabelText></RadioLabel>

  {selectedBadge && (
    <Badge bg={selectedBadge === "Pro" ? 'green' : selectedBadge === "Beginner" ? 'orange' : "info"} >{selectedBadge}</Badge>
  )}

  <Button color={"primary"} onClick={() => setShowModal(true)}>{"Save Badge"}</Button>

  <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Saved"} content={<Text textStyle='paragraph' >{"Badge saved successfully."}</Text>} />
</div>
