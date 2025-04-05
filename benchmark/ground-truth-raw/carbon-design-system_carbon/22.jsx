<div style={{"display": "flex", "flexDirection": "column"}}>
  <TextInput labelText={"Email Address"} onChange={(e) => setEmail(e.target.value)} value={email} />
  <Checkbox labelText={"I agree to the terms and conditions"} onChange={() => setAgree(!agree)} checked={agree} />
  <Button kind='primary' onClick={handleSignup} disabled={!agree} >{"Sign Up"}</Button>
</div>
