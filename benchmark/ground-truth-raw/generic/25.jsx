<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button text={"View Summary"} type={"primary"} onClick={() => setShowSummary(true)} />
  <Modal isOpen={showSummary} onClose={() => setShowSummary(false)} title={"Quiz Summary"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <Text type={"title"} text={"You scored 8/10"} /> <ProgressBar progress={0.8 * 100} /> <List items={wrongAnswers} /> </div> } />
</div>

