<div style={{display: 'flex', flexDirection: 'column'}}>
  <Button text={"Load Data"} type={"primary"} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 3000); }} />
  <Spinner />
</div>
