{showWelcome && (
  <Modal modalHeading={"Welcome"} open={showWelcome} onRequestClose={() => setShowWelcome(false)} >{<Text as='p' >{"Welcome to the app!"}</Text>}</Modal>
)}

