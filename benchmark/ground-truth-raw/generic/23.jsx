<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{"display": "flex", "flexDirection": "row"}}>
    <Card >
      <Text type={"title"} text={"Product A"} />
      <Badge text={"Available"} type={"success"} />
      <List items={["Waterproof", "Bluetooth", "1-year warranty"]} />
    </Card>
    <Card >
      <Text type={"title"} text={"Product B"} />
      <Badge text={"Out of Stock"} type={"error"} />
      <List items={["Waterproof", "Bluetooth", "2-year warranty"]} />
    </Card>
  </div>
  <Button text={"Show Comparison Summary"} type={"primary"} onClick={() => setShowSummary(true)} />
  <Modal isOpen={showSummary} onClose={() => setShowSummary(false)} title={"Comparison Summary"} content={ <List items={["Waterproof", "Bluetooth"]} /> } />
</div>
