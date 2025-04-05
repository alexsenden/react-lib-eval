<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', flexDirection: 'row'}}><Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} /><Text content={"I agree to the Terms and Conditions"} type='body' /></div>

  <Button disabled={!agreed} color='info' onClick={() => setShowToast(true)} >{"Continue"}</Button>

  {showToast && (
    <Toast >{"Thank you for agreeing to the terms."}</Toast>
  )}
</div>

