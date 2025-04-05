{showWelcome && (
  <Modal onClose={() => setShowWelcome(false)} popup={showWelcome} ><Modal.Header>{"Welcome"}</Modal.Header><Modal.Body>{<Text type={"body"} text={"Welcome to the app!"} />}</Modal.Body></Modal>
)}

