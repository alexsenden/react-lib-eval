<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{"display": "flex", "flexDirection": "row"}}>
    <Card>
      <Text type={"title"} text={"Product A"} />
      <Badge color={'success'}>{"Available"}</Badge>
      <List ordered ><List.Item>{Waterproof}</List.Item><List.Item>{Bluetooth}</List.Item><List.Item>{1}</List.Item><List.Item>{year}</List.Item><List.Item>{warranty}</List.Item></List>
    </Card>
    <Card>
      <Text type={"title"} text={"Product B"} />
      <Badge color={'failure'}>{"Out of Stock"}</Badge>
      <List ordered ><List.Item>{Waterproof}</List.Item><List.Item>{Bluetooth}</List.Item><List.Item>{2}</List.Item><List.Item>{year}</List.Item><List.Item>{warranty}</List.Item></List>
    </Card>
  </div>
  <Button color='info' onClick={() => setShowSummary(true)} >{"Show Comparison Summary"}</Button>
  <Modal onClose={() => setShowSummary(false)} popup={showSummary} ><Modal.Header>{"Comparison Summary"}</Modal.Header><Modal.Body>{ <List ordered ><List.Item>{Waterproof}</List.Item><List.Item>{Bluetooth}</List.Item></List> }</Modal.Body></Modal>
</div>
