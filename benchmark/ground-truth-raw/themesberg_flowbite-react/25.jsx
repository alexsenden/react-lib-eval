<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button color='info' onClick={() => setShowSummary(true)} >{"View Summary"}</Button>
  <Modal onClose={() => setShowSummary(false)} popup={showSummary} ><Modal.Header>{"Quiz Summary"}</Modal.Header><Modal.Body>{ <div style={{"display": "flex", "flexDirection": "column"}}> <Text type={"title"} text={"You scored 8/10"} /> <Progress progress={0.8} /> <List ordered ><List.Item>{wrongAnswers}</List.Item></List> </div> }</Modal.Body></Modal>
</div>

