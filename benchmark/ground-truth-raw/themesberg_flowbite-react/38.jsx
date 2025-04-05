<div style={{display: 'flex', flexDirection: 'column'}}>
  <Progress progress={progress} />
  <Text type={"body"} text={"Complete your profile to unlock more features."} />
  <Button color='info' onClick={() => setShowModal(true)} >{"Add Bio"}</Button>

  <Modal onClose={() => setShowModal(false)} popup={showModal} ><Modal.Header>{"Add Your Bio"}</Modal.Header><Modal.Body>{ <TextArea value={bio} /> setBio(e.target.value)} /> }</Modal.Body></Modal>
</div>
