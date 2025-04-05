<div style={{display: 'flex', flexDirection: 'column'}}>
  <Avatar src={"https://picsum.photos/100"} alt={"User avatar"} />
  <Input value={name} label={"Full Name"} onChange={(e) => setName(e.target.value)} />
  <Input value={email} label={"Email Address"} onChange={(e) => setEmail(e.target.value)} />
  <Button text={"Save Changes"} type={"primary"} onClick={() => setShowToast(true)} />
  <Toast message={"Profile updated"} type={"success"} onClose={() => setShowToast(false)} />
</div>
