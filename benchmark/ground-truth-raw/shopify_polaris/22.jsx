<div style={{"display": "flex", "flexDirection": "column"}}>
  <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email Address"} />
  <Checkbox label={"I agree to the terms and conditions"} checked={agree} onChange={() => setAgree(!agree)} />
  <Button disabled={!agree} onClick={handleSignup} tone='success' >{"Sign Up"}</Button>
</div>
