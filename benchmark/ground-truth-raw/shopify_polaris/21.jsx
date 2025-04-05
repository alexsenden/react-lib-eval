<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button onClick={() => setShowOverviewModal(true)} tone='success' >{"View Course Overview"}</Button>
  <Modal open={showOverviewModal} onClose={() => setShowOverviewModal(false)} title={"Course Overview"} ><Modal.Section>{ <div style={{"display": "flex", "flexDirection": "column"}}> <Accordion items={[ {"title": "Course Objectives", "content": <List ordered ><List.Item>{objectives1}</List.Item><List.Item>{objectives2}</List.Item><List.Item>{objectives3}</List.Item></List>}, {"title": "Course Topics", "content": <List ordered ><List.Item>{topics1}</List.Item><List.Item>{topics2}</List.Item><List.Item>{topics3}</List.Item></List>}, {"title": "Requirements", "content": <List ordered ><List.Item>{requirements1}</List.Item><List.Item>{requirements2}</List.Item></List>}]} /> </div>}</Modal.Section></Modal>
</div>
