<div style={{"display": "flex", "flexDirection": "column"}}>
  <Input value={email} label={"Email Address"} onChange={(e) => setEmail(e.target.value)} />
  <Checkbox label={"I agree to the terms and conditions"} checked={agree} onChange={() => setAgree(!agree)} />
  <Button text={"Sign Up"} type={"primary"} onClick={handleSignup} disabled={!agree} />
</div>
