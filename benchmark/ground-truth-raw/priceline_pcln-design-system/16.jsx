<div style={{display: 'flex', flexDirection: 'column'}}>
  <Button color={"primary"} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 3000); }}>{"Load Data"}</Button>
  <Spinner />
</div>
