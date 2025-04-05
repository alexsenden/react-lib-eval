<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Contact Support"} />
    <div style={{display: 'flex', flexDirection: 'row'}}><Input value={title} onChange={(e) => setTitle(e.target.value)}/><Text content={"Issue Title"} type='body' /></div>
    <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
    <Select value={priority} ><option>Low</option><option>Medium</option><option>High</option></Select>
    <Button color='info' onClick={() => setSubmitted(true)} >{"Send Request"}</Button>
    <Alert color='info' >{"Your support request has been submitted."}</Alert>
  </div>
</Card>

