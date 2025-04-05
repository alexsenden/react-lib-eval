{showWelcome && (
  <Modal isOpen={showWelcome} onClose={() => setShowWelcome(false)} title={"Welcome"} content={<Text textStyle='paragraph' >{"Welcome to the app!"}</Text>} />
)}

