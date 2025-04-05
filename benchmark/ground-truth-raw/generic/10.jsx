<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Text type={"title"} text={"Contact Support"} />
    <Input value={title} label={"Issue Title"} onChange={(e) => setTitle(e.target.value)} />
    <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
    <Select value={priority} options={[{"value": "Low", "label": "Low"}, {"value": "Medium", "label": "Medium"}, {"value": "High", "label": "High"}]} />
    <Button text={"Send Request"} type={"primary"} onClick={() => setSubmitted(true)} />
    <Alert type={"info"} message={"Your support request has been submitted."} />
  </div>
</Card>

