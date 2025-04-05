<div style={{display: 'flex', flexDirection: 'column'}}>
  <Avatar source={"https://picsum.photos/100"} accessibilityLabel={"User avatar"} />
  <TextField value={name} onChange={(e) => setName(e.target.value)} label={"Full Name"} />
  <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"Email Address"} />
  <Button onClick={() => setShowToast(true)} tone='success' >{"Save Changes"}</Button>
  <Toast content={"Profile updated"} onDismiss={() => setShowToast(false)} />
</div>
