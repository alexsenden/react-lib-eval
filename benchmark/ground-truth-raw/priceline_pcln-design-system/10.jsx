<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text textStyle='title1' >{"Contact Support"}</Text>
    <Label>{"Issue Title"}<Input onChange={(e) => setTitle(e.target.value)} value={title}/></Label>
    <TextArea value={description} onChange={(e) => setDescription(e.target.value)}/>
    <Select defaultValue={priority} ><option>Low</option><option>Medium</option><option>High</option></Select>
    <Button color={"primary"} onClick={() => setSubmitted(true)}>{"Send Request"}</Button>
    <Banner color='blue' text={"Your support request has been submitted."} />
  </div>
</Card>

