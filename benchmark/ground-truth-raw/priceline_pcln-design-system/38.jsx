<div style={{display: 'flex', flexDirection: 'column'}}>
  <ProgressBar steps={1} />
  <Text textStyle='paragraph' >{"Complete your profile to unlock more features."}</Text>
  <Button color={"primary"} onClick={() => setShowModal(true)}>{"Add Bio"}</Button>

  <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Add Your Bio"} content={ <TextArea value={bio}/> setBio(e.target.value)} /> } />
</div>
