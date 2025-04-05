<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button onClick={() => setShowSummary(true)} tone='success' >{"View Summary"}</Button>
  <Modal open={showSummary} onClose={() => setShowSummary(false)} title={"Quiz Summary"} ><Modal.Section>{ <div style={{"display": "flex", "flexDirection": "column"}}> <Text as='h1' >{"You scored 8/10"}</Text> <ProgressBar progress={0.8 * 100} /> <List ordered ><List.Item>{wrongAnswers}</List.Item></List> </div> }</Modal.Section></Modal>
</div>

