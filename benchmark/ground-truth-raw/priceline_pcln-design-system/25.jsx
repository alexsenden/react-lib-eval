<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button color={"primary"} onClick={() => setShowSummary(true)}>{"View Summary"}</Button>
  <Modal isOpen={showSummary} onClose={() => setShowSummary(false)} title={"Quiz Summary"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <Text textStyle='title1' >{"You scored 8/10"}</Text> <ProgressBar steps={1} /> <List.ol ><li>{wrongAnswers}</li></List.ol> </div> } />
</div>

