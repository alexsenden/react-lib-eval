<div style={{display: 'flex', flexDirection: 'column'}}>
  <Avatar src={"https://picsum.photos/100"} alt={"User avatar"} />
  <TextInput labelText={"Full Name"} onChange={(e) => setName(e.target.value)} value={name} />
  <TextInput labelText={"Email Address"} onChange={(e) => setEmail(e.target.value)} value={email} />
  <Button kind='primary' onClick={() => setShowToast(true)} >{"Save Changes"}</Button>
  <ToastNotification kind={"success"} onClose={() => setShowToast(false)} title={"Profile updated"} />
</div>
