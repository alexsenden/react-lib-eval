<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text as='h1' >{"Contact Support"}</Text>
    <TextField value={title} onChange={(e) => setTitle(e.target.value)} label={"Issue Title"} />
    <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
    <Select value={priority} options={[{"value": "Low", "label": "Low"}, {"value": "Medium", "label": "Medium"}, {"value": "High", "label": "High"}]} />
    <Button onClick={() => setSubmitted(true)} tone='success' >{"Send Request"}</Button>
    <Banner tone='info' ><Text as="p">{"Your support request has been submitted."}</Text></Banner>
  </div>
</Card>

