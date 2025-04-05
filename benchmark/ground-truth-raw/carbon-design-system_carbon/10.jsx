<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Contact Support"}</Text>
    <TextInput labelText={"Issue Title"} onChange={(e) => setTitle(e.target.value)} value={title} />
    <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
    <Select defaultValue={priority} ><SelectItem value='Low' text='Low' /><SelectItem value='Medium' text='Medium' /><SelectItem value='High' text='High' /></Select>
    <Button kind='primary' onClick={() => setSubmitted(true)} >{"Send Request"}</Button>
    <Alert type={"info"} message={"Your support request has been submitted."} />
  </div>
</Card>

