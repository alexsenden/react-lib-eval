<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Event Details"} />

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar img={'https://picsum.photos/100'} alt={'Organizer Avatar'} />
      <Text type={"body"} text={"Organizer: John Doe"} />
    </div>

    <Text type={"title"} text={"React Summit 2025"} />
    <Text type={"body"} text={"A gathering of the brightest minds in React."} />
    
    <Progress progress={50} />

    <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)} /><Text content={"Subscribe for Event Updates"} type='body' /></div>

    <Button color='info' onClick={() => setShowModal(true)} >{"Show Event Updates"}</Button>

    <Modal onClose={() => setShowModal(false)} popup={showModal} ><Modal.Header>{"Event Updates"}</Modal.Header><Modal.Body>{<Text type={'body'} text={"Stay tuned for more information about React Summit 2025!"} />}</Modal.Body></Modal>
  </div>
</Card>
