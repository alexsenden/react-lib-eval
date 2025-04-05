<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Event Details"}</Text>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar source={'https://picsum.photos/100'} accessibilityLabel={'Organizer Avatar'} />
      <Text as='p' >{"Organizer: John Doe"}</Text>
    </div>

    <Text as='h1' >{"React Summit 2025"}</Text>
    <Text as='p' >{"A gathering of the brightest minds in React."}</Text>
    
    <ProgressBar progress={50 * 100} />

    <Checkbox label={"Subscribe for Event Updates"} checked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)} />

    <Button onClick={() => setShowModal(true)} tone='success' >{"Show Event Updates"}</Button>

    <Modal open={showModal} onClose={() => setShowModal(false)} title={"Event Updates"} ><Modal.Section>{<Text as='p' >{"Stay tuned for more information about React Summit 2025!"}</Text>}</Modal.Section></Modal>
  </div>
</Card>
