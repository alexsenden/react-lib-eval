<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{"display": "flex", "flexDirection": "row"}}>
    <Card>
      <Text textStyle='title1' >{"Product A"}</Text>
      <Badge bg={'green'} >{"Available"}</Badge>
      <List.ol ><li>{Waterproof}</li><li>{Bluetooth}</li><li>{1}</li><li>{year}</li><li>{warranty}</li></List.ol>
    </Card>
    <Card>
      <Text textStyle='title1' >{"Product B"}</Text>
      <Badge bg={'red'} >{"Out of Stock"}</Badge>
      <List.ol ><li>{Waterproof}</li><li>{Bluetooth}</li><li>{2}</li><li>{year}</li><li>{warranty}</li></List.ol>
    </Card>
  </div>
  <Button color={"primary"} onClick={() => setShowSummary(true)}>{"Show Comparison Summary"}</Button>
  <Modal isOpen={showSummary} onClose={() => setShowSummary(false)} title={"Comparison Summary"} content={ <List.ol ><li>{Waterproof}</li><li>{Bluetooth}</li></List.ol> } />
</div>
