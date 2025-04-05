{showWelcome && (
  <Modal open={showWelcome} onClose={() => setShowWelcome(false)} title={"Welcome"} ><Modal.Section>{<Text as='p' >{"Welcome to the app!"}</Text>}</Modal.Section></Modal>
)}

