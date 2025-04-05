<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Your Results"}</Text>
    <ProgressBar />

    <Badge tone={score >= 80 ? 'success' : score >= 50 ? 'warning' : 'critical'} >{score >= 80 ? "Excellent" : score >= 50 ? "Needs Review" : "Poor"}</Badge>

    <Text as='p' >{score >= 80 ? "Great job!" : score >= 50 ? "Almost there!" : "Try again."}</Text>

    <Button onClick={() => setShowModal(true)} tone='success' >{"Review Answers"}</Button>

    <Modal open={showModal} onClose={() => setShowModal(false)} title={"Review"} ><Modal.Section>{<Text as='p' >{"Redirecting to review page..."}</Text>}</Modal.Section></Modal>
  </div>
</Card>

