<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar progress={progress * 100} />
  <Text type={"body"} text={"Complete your profile to unlock more features."} />
  <Button text={"Add Bio"} type={"primary"} onClick={() => setShowModal(true)} />

  <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Add Your Bio"} content={ <TextArea value={bio} /> setBio(e.target.value)} /> } />
</div>
