<div style={{display: 'flex', flexDirection: 'column'}}>
  <Avatar img={"https://picsum.photos/100"} alt={"User avatar"} />
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={name} onChange={(e) => setName(e.target.value)}/><Text content={"Full Name"} type='body' /></div>
  <div style={{display: 'flex', flexDirection: 'row'}}><Input value={email} onChange={(e) => setEmail(e.target.value)}/><Text content={"Email Address"} type='body' /></div>
  <Button color='info' onClick={() => setShowToast(true)} >{"Save Changes"}</Button>
  <Toast >{"Profile updated"}</Toast>
</div>
