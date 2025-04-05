<div style={{display: 'flex', flexDirection: 'column'}}>
  <Checkbox label={"I agree to the Terms and Conditions"} checked={agreed} onChange={() => setAgreed(!agreed)} />

  <Button text={"Continue"} type={"primary"} onClick={() => setShowToast(true)} disabled={!agreed} />

  {showToast && (
    <Toast message={"Thank you for agreeing to the terms."} type={"info"} onClose={() => setShowToast(false)} />
  )}
</div>

