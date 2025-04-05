<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Event Details"}</Text>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={'https://picsum.photos/100'} alt={'Organizer Avatar'} />
      <Text as='p' >{"Organizer: John Doe"}</Text>
    </div>

    <Text as='h1' >{"React Summit 2025"}</Text>
    <Text as='p' >{"A gathering of the brightest minds in React."}</Text>
    
    <ProgressBar value={50} />

    <Checkbox labelText={"Subscribe for Event Updates"} onChange={() => setIsSubscribed(!isSubscribed)} checked={isSubscribed} />

    <Button kind='primary' onClick={() => setShowModal(true)} >{"Show Event Updates"}</Button>

    <Modal modalHeading={"Event Updates"} open={showModal} onRequestClose={() => setShowModal(false)} >{<Text as='p' >{"Stay tuned for more information about React Summit 2025!"}</Text>}</Modal>
  </div>
</Card>
