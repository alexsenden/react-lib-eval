<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button color={"primary"} onClick={() => setShowOverviewModal(true)}>{"View Course Overview"}</Button>
  <Modal isOpen={showOverviewModal} onClose={() => setShowOverviewModal(false)} title={"Course Overview"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <Accordion items={[{"headerLabel": <Text>Course Objectives</Text>, content: <List.ol ><li>{objectives1}</li><li>{objectives2}</li><li>{objectives3}</li></List.ol>}, {"headerLabel": <Text>Course Topics</Text>, content: <List.ol ><li>{topics1}</li><li>{topics2}</li><li>{topics3}</li></List.ol>}, {"headerLabel": <Text>Requirements</Text>, content: <List.ol ><li>{requirements1}</li><li>{requirements2}</li></List.ol>}]} /> </div>} />
</div>
