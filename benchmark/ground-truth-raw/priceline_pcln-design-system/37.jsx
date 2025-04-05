<div style={{display: 'flex', flexDirection: 'column'}}>
  <Label>{"Password"}<Input onChange={(e) => { const val = e.target.value; setPassword(val); setStrength(val.length >= 8 ? 1 : val.length >= 4 ? 0.5 : 0); }} value={password}/></Label>

  <ProgressBar steps={1} />
</div>
