<div style={{display: 'flex', flexDirection: 'column'}}>
  <Alert type={'warning'} message={"System Maintenance in 1 hour"} />

  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Button text={"Show Notification"} type={'primary'} onClick={() => setShowModal(true)} />
    <Button text={"Show Toast"} type={'primary'} onClick={() => setShowToast(true)} />
  </div>

  <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Notification"} content={loading ? <Spinner /> : <Text type={'body'} text={"The system will be down from 1AM to 8AM for maintenance."} />} />

  {showToast && (
    <Toast message={"The system will resume regular operation at 8AM."} type={'info'} onClose={() => setShowToast(false)} />
  )}
</div>
