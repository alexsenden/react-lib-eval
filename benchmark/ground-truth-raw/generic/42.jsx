<div style={{display: 'flex', flexDirection: 'column'}}>
  <RadioButton checked={selectedBadge === "Pro"} label={"Pro"} onChange={() => setSelectedBadge("Pro")} />
  <RadioButton checked={selectedBadge === "Beginner"} label={"Beginner"} onChange={() => setSelectedBadge("Beginner")} />
  <RadioButton checked={selectedBadge === "Mentor"} label={"Mentor"} onChange={() => setSelectedBadge("Mentor")} />

  {selectedBadge && (
    <Badge text={selectedBadge} type={selectedBadge === "Pro" ? "success" : selectedBadge === "Beginner" ? "warning" : "info"} />
  )}

  <Button text={"Save Badge"} type={"primary"} onClick={() => setShowModal(true)} />

  <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Saved"} content={<Text type={"body"} text={"Badge saved successfully."} />} />
</div>
