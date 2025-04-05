<div style={{display: 'flex', flexDirection: 'column'}}>
  <TextInput labelText={"Password"} onChange={(e) => { const val = e.target.value; setPassword(val); setStrength(val.length >= 8 ? 1 : val.length >= 4 ? 0.5 : 0); }} value={password} />

  <ProgressBar value={strength} />
</div>
