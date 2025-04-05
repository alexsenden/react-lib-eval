<div style={{display: 'flex', flexDirection: 'column'}}>
  <Banner color='orange' text={"System Maintenance in 1 hour"} />

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Button color={'primary'} onClick={() => setShowModal(true)}>{"Show Notification"}</Button>
    <Button color={'primary'} onClick={() => setShowToast(true)}>{"Show Toast"}</Button>
  </div>

  <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Notification"} content={loading ? <Spinner /> : <Text textStyle='paragraph' >{"The system will be down from 1AM to 8AM for maintenance."}</Text>} />

  {showToast && (
    <Toast colorScheme={'info'} onRemoveClick={() => setShowToast(false)} >{"The system will resume regular operation at 8AM."}</Toast>
  )}
</div>
