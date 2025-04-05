<div style={{display: 'flex', flexDirection: 'column'}}>
  <Banner tone='warning' ><Text as="p">{"System Maintenance in 1 hour"}</Text></Banner>

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Button onClick={() => setShowModal(true)} tone='success' >{"Show Notification"}</Button>
    <Button onClick={() => setShowToast(true)} tone='success' >{"Show Toast"}</Button>
  </div>

  <Modal open={showModal} onClose={() => setShowModal(false)} title={"Notification"} ><Modal.Section>{loading ? <Spinner /> : <Text as='p' >{"The system will be down from 1AM to 8AM for maintenance."}</Text>}</Modal.Section></Modal>

  {showToast && (
    <Toast content={"The system will resume regular operation at 8AM."} onDismiss={() => setShowToast(false)} />
  )}
</div>
