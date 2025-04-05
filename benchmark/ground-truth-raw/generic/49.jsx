<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Your Results"} />
    <ProgressBar />

    <Badge text={score >= 80 ? "Excellent" : score >= 50 ? "Needs Review" : "Poor"} type={score >= 80 ? "success" : score >= 50 ? "warning" : "error"} />

    <Text type={"body"} text={score >= 80 ? "Great job!" : score >= 50 ? "Almost there!" : "Try again."} />

    <Button text={"Review Answers"} type={"primary"} onClick={() => setShowModal(true)} />

    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Review"} content={<Text type={"body"} text={"Redirecting to review page..."} />} />
  </div>
</Card>

