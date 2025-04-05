<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text textStyle='title1' >{"Event Details"}</Text>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar altText={'Organizer Avatar'} src={'https://picsum.photos/100'} size='40' />
      <Text textStyle='paragraph' >{"Organizer: John Doe"}</Text>
    </div>

    <Text textStyle='title1' >{"React Summit 2025"}</Text>
    <Text textStyle='paragraph' >{"A gathering of the brightest minds in React."}</Text>
    
    <ProgressBar steps={100} />

    <StyledLabel><Checkbox defaultChecked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)} />{"Subscribe for Event Updates"}</StyledLabel>

    <Button color={"primary"} onClick={() => setShowModal(true)}>{"Show Event Updates"}</Button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Event Updates"} content={<Text textStyle='paragraph' >{"Stay tuned for more information about React Summit 2025!"}</Text>} />
  </div>
</Card>
