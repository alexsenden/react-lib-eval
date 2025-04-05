<div style={{"display": "flex", "flexDirection": "column"}}>
  <Label>{"Email Address"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  <StyledLabel><Checkbox defaultChecked={agree} onChange={() => setAgree(!agree)} />{"I agree to the terms and conditions"}</StyledLabel>
  <Button color={"primary"} onClick={handleSignup} disabled={!agree}>{"Sign Up"}</Button>
</div>
