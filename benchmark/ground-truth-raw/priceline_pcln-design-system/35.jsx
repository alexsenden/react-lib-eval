<div style={{display: 'flex', flexDirection: 'column'}}>
  <StyledLabel><Checkbox defaultChecked={agreed} onChange={() => setAgreed(!agreed)} />{"I agree to the Terms and Conditions"}</StyledLabel>

  <Button color={"primary"} onClick={() => setShowToast(true)} disabled={!agreed}>{"Continue"}</Button>

  {showToast && (
    <Toast colorScheme={"info"} onRemoveClick={() => setShowToast(false)} >{"Thank you for agreeing to the terms."}</Toast>
  )}
</div>

