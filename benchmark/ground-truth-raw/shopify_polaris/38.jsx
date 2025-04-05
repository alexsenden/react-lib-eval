<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar progress={progress * 100} />
  <Text as='p' >{"Complete your profile to unlock more features."}</Text>
  <Button onClick={() => setShowModal(true)} tone='success' >{"Add Bio"}</Button>

  <Modal open={showModal} onClose={() => setShowModal(false)} title={"Add Your Bio"} ><Modal.Section>{ <TextArea value={bio} /> setBio(e.target.value)} /> }</Modal.Section></Modal>
</div>
