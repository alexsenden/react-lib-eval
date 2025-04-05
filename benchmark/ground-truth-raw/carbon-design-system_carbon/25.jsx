<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button kind='primary' onClick={() => setShowSummary(true)} >{"View Summary"}</Button>
  <Modal modalHeading={"Quiz Summary"} open={showSummary} onRequestClose={() => setShowSummary(false)} >{ <div style={{"display": "flex", "flexDirection": "column"}}> <Text as='h1' >{"You scored 8/10"}</Text> <ProgressBar value={0.8} /> <UnorderedList ><ListItem>{wrongAnswers}</ListItem></UnorderedList> </div> }</Modal>
</div>

