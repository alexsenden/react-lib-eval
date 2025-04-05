<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{"display": "flex", "flexDirection": "row"}}>
    <Card >
      <Text as='h1' >{"Product A"}</Text>
      <Badge text={"Available"} type={"success"} />
      <UnorderedList ><ListItem>{Waterproof}</ListItem><ListItem>{Bluetooth}</ListItem><ListItem>{1}</ListItem><ListItem>{year}</ListItem><ListItem>{warranty}</ListItem></UnorderedList>
    </Card>
    <Card >
      <Text as='h1' >{"Product B"}</Text>
      <Badge text={"Out of Stock"} type={"error"} />
      <UnorderedList ><ListItem>{Waterproof}</ListItem><ListItem>{Bluetooth}</ListItem><ListItem>{2}</ListItem><ListItem>{year}</ListItem><ListItem>{warranty}</ListItem></UnorderedList>
    </Card>
  </div>
  <Button kind='primary' onClick={() => setShowSummary(true)} >{"Show Comparison Summary"}</Button>
  <Modal modalHeading={"Comparison Summary"} open={showSummary} onRequestClose={() => setShowSummary(false)} >{ <UnorderedList ><ListItem>{Waterproof}</ListItem><ListItem>{Bluetooth}</ListItem></UnorderedList> }</Modal>
</div>
