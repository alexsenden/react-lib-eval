<div style={{display: 'flex', flexDirection: 'column'}}>
  <Checkbox labelText={"I agree to the Terms and Conditions"} onChange={() => setAgreed(!agreed)} checked={agreed} />

  <Button kind='primary' onClick={() => setShowToast(true)} disabled={!agreed} >{"Continue"}</Button>

  {showToast && (
    <ToastNotification kind={"info"} onClose={() => setShowToast(false)} title={"Thank you for agreeing to the terms."} />
  )}
</div>

