<div style={{display: 'flex', flexDirection: 'column'}}>
  <Button onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 3000); }} tone='success' >{"Load Data"}</Button>
  <Spinner />
</div>
