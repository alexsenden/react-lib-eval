<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text textStyle='title1' >{"Your Results"}</Text>
    <ProgressBar />

    <Badge bg={score >= 80 ? 'green' : score >= 50 ? 'orange' : 'red'} >{score >= 80 ? "Excellent" : score >= 50 ? "Needs Review" : "Poor"}</Badge>

    <Text textStyle='paragraph' >{score >= 80 ? "Great job!" : score >= 50 ? "Almost there!" : "Try again."}</Text>

    <Button color={"primary"} onClick={() => setShowModal(true)}>{"Review Answers"}</Button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Review"} content={<Text textStyle='paragraph' >{"Redirecting to review page..."}</Text>} />
  </div>
</Card>

