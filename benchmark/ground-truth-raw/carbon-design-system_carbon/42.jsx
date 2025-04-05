<div style={{display: 'flex', flexDirection: 'column'}}>
  <RadioButton labelText={"Pro"} checked={selectedBadge === "Pro"} onChange={() => setSelectedBadge("Pro")} />
  <RadioButton labelText={"Beginner"} checked={selectedBadge === "Beginner"} onChange={() => setSelectedBadge("Beginner")} />
  <RadioButton labelText={"Mentor"} checked={selectedBadge === "Mentor"} onChange={() => setSelectedBadge("Mentor")} />

  {selectedBadge && (
    <Badge text={selectedBadge} type={selectedBadge === "Pro" ? "success" : selectedBadge === "Beginner" ? "warning" : "info"} />
  )}

  <Button kind='primary' onClick={() => setShowModal(true)} >{"Save Badge"}</Button>

  <Modal modalHeading={"Saved"} open={showModal} onRequestClose={() => setShowModal(false)} >{<Text as='p' >{"Badge saved successfully."}</Text>}</Modal>
</div>
