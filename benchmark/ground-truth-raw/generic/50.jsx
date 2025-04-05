<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Event Details"} />

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={'https://picsum.photos/100'} alt={'Organizer Avatar'} />
      <Text type={"body"} text={"Organizer: John Doe"} />
    </div>

    <Text type={"title"} text={"React Summit 2025"} />
    <Text type={"body"} text={"A gathering of the brightest minds in React."} />
    
    <ProgressBar progress={50 * 100} />

    <Checkbox label={"Subscribe for Event Updates"} checked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)} />

    <Button text={"Show Event Updates"} type={"primary"} onClick={() => setShowModal(true)} />

    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Event Updates"} content={<Text type={'body'} text={"Stay tuned for more information about React Summit 2025!"} />} />
  </div>
</Card>
