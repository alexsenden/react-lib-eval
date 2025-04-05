<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar value={progress} />
  <Text as='p' >{"Complete your profile to unlock more features."}</Text>
  <Button kind='primary' onClick={() => setShowModal(true)} >{"Add Bio"}</Button>

  <Modal modalHeading={"Add Your Bio"} open={showModal} onRequestClose={() => setShowModal(false)} >{ <TextArea value={bio} /> setBio(e.target.value)} /> }</Modal>
</div>
