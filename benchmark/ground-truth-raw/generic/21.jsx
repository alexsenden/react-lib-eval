<div style={{"display": "flex", "flexDirection": "column"}}>
  <Button text={"View Course Overview"} type={"primary"} onClick={() => setShowOverviewModal(true)} />
  <Modal isOpen={showOverviewModal} onClose={() => setShowOverviewModal(false)} title={"Course Overview"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <Accordion items={[ {"title": "Course Objectives", "content": <List items={[objectives1, objectives2, objectives3]} />}, {"title": "Course Topics", "content": <List items={[topics1, topics2, topics3]} />}, {"title": "Requirements", "content": <List items={[requirements1, requirements2]} />}]} /> </div>} />
</div>
