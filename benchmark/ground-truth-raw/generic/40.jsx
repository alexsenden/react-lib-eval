{showWelcome && (
  <Modal isOpen={showWelcome} onClose={() => setShowWelcome(false)} title={"Welcome"} content={<Text type={"body"} text={"Welcome to the app!"} />} />
)}

