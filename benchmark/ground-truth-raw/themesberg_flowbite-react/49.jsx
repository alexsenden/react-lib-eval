<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Your Results"} />
    <Progress />

    <Badge color={score >= 80 ? 'success' : score >= 50 ? 'warning' : 'failure'}>{score >= 80 ? "Excellent" : score >= 50 ? "Needs Review" : "Poor"}</Badge>

    <Text type={"body"} text={score >= 80 ? "Great job!" : score >= 50 ? "Almost there!" : "Try again."} />

    <Button color='info' onClick={() => setShowModal(true)} >{"Review Answers"}</Button>

    <Modal onClose={() => setShowModal(false)} popup={showModal} ><Modal.Header>{"Review"}</Modal.Header><Modal.Body>{<Text type={"body"} text={"Redirecting to review page..."} />}</Modal.Body></Modal>
  </div>
</Card>

