<div style={{display: 'flex', flexDirection: 'column'}}>
  <Checkbox label={"I agree to the Terms and Conditions"} checked={agreed} onChange={() => setAgreed(!agreed)} />

  <Button disabled={!agreed} onClick={() => setShowToast(true)} tone='success' >{"Continue"}</Button>

  {showToast && (
    <Toast content={"Thank you for agreeing to the terms."} onDismiss={() => setShowToast(false)} />
  )}
</div>

