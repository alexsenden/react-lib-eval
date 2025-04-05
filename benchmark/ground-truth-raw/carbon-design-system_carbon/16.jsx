<div style={{display: 'flex', flexDirection: 'column'}}>
  <Button kind='primary' onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 3000); }} >{"Load Data"}</Button>
  <Loading />
</div>
