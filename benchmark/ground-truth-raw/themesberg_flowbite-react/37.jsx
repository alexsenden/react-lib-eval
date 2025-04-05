<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={password} onChange={(e) => { const val = e.target.value; setPassword(val); setStrength(val.length >= 8 ? 1 : val.length >= 4 ? 0.5 : 0); }}/><Text content={"Password"} type='body' /></div>

  <Progress progress={strength} />
</div>
