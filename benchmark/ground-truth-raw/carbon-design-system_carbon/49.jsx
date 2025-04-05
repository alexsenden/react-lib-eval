<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Your Results"}</Text>
    <ProgressBar />

    <Badge text={score >= 80 ? "Excellent" : score >= 50 ? "Needs Review" : "Poor"} type={score >= 80 ? "success" : score >= 50 ? "warning" : "error"} />

    <Text as='p' >{score >= 80 ? "Great job!" : score >= 50 ? "Almost there!" : "Try again."}</Text>

    <Button kind='primary' onClick={() => setShowModal(true)} >{"Review Answers"}</Button>

    <Modal modalHeading={"Review"} open={showModal} onRequestClose={() => setShowModal(false)} >{<Text as='p' >{"Redirecting to review page..."}</Text>}</Modal>
  </div>
</Card>

