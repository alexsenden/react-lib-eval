<div style={{"display": "flex", "flexDirection": "column"}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email Address"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={agree} onChange={() => setAgree(!agree)} /><Text content={"I agree to the terms and conditions"} type='body' /></div>
  <Button disabled={!agree} color='info' onClick={handleSignup} >{"Sign Up"}</Button>
</div>
