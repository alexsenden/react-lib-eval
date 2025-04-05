<div style={{display: 'flex', flexDirection: 'column'}}>
  <Alert color='warning' >{"System Maintenance in 1 hour"}</Alert>

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Button color='info' onClick={() => setShowModal(true)} >{"Show Notification"}</Button>
    <Button color='info' onClick={() => setShowToast(true)} >{"Show Toast"}</Button>
  </div>

  <Modal onClose={() => setShowModal(false)} popup={showModal} ><Modal.Header>{"Notification"}</Modal.Header><Modal.Body>{loading ? <Spinner /> : <Text type={'body'} text={"The system will be down from 1AM to 8AM for maintenance."} />}</Modal.Body></Modal>

  {showToast && (
    <Toast >{"The system will resume regular operation at 8AM."}</Toast>
  )}
</div>
