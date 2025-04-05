<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{"display": "flex", "flexDirection": "row"}}>
    <Card >
      <Text as='h1' >{"Product A"}</Text>
      <Badge tone={'success'} >{"Available"}</Badge>
      <List ordered ><List.Item>{Waterproof}</List.Item><List.Item>{Bluetooth}</List.Item><List.Item>{1}</List.Item><List.Item>{year}</List.Item><List.Item>{warranty}</List.Item></List>
    </Card>
    <Card >
      <Text as='h1' >{"Product B"}</Text>
      <Badge tone={'critical'} >{"Out of Stock"}</Badge>
      <List ordered ><List.Item>{Waterproof}</List.Item><List.Item>{Bluetooth}</List.Item><List.Item>{2}</List.Item><List.Item>{year}</List.Item><List.Item>{warranty}</List.Item></List>
    </Card>
  </div>
  <Button onClick={() => setShowSummary(true)} tone='success' >{"Show Comparison Summary"}</Button>
  <Modal open={showSummary} onClose={() => setShowSummary(false)} title={"Comparison Summary"} ><Modal.Section>{ <List ordered ><List.Item>{Waterproof}</List.Item><List.Item>{Bluetooth}</List.Item></List> }</Modal.Section></Modal>
</div>
