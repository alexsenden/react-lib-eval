<div style={{display: 'flex', flexDirection: 'column'}}>
  <Alert type={'warning'} message={"System Maintenance in 1 hour"} />

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Button kind='primary' onClick={() => setShowModal(true)} >{"Show Notification"}</Button>
    <Button kind='primary' onClick={() => setShowToast(true)} >{"Show Toast"}</Button>
  </div>

  <Modal modalHeading={"Notification"} open={showModal} onRequestClose={() => setShowModal(false)} >{loading ? <Loading /> : <Text as='p' >{"The system will be down from 1AM to 8AM for maintenance."}</Text>}</Modal>

  {showToast && (
    <ToastNotification kind={'info'} onClose={() => setShowToast(false)} title={"The system will resume regular operation at 8AM."} />
  )}
</div>
