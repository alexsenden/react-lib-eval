<div style={{display: 'flex', flexDirection: 'column'}}>
  <Button color='info' onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 3000); }} >{"Load Data"}</Button>
  <Spinner />
</div>
