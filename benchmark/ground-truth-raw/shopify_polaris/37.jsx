<div style={{display: 'flex', flexDirection: 'column'}}>
  <TextField value={password} onChange={(e) => { const val = e.target.value; setPassword(val); setStrength(val.length >= 8 ? 1 : val.length >= 4 ? 0.5 : 0); }} label={"Password"} />

  <ProgressBar progress={strength * 100} />
</div>
