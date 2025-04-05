<div style={{display: 'flex', flexDirection: 'column'}}>
  <Avatar altText={"User avatar"} src={"https://picsum.photos/100"} size='40' />
  <Label>{"Full Name"}<Input onChange={(e) => setName(e.target.value)} value={name}/></Label>
  <Label>{"Email Address"}<Input onChange={(e) => setEmail(e.target.value)} value={email}/></Label>
  <Button color={"primary"} onClick={() => setShowToast(true)}>{"Save Changes"}</Button>
  <Toast colorScheme={"success"} onRemoveClick={() => setShowToast(false)} >{"Profile updated"}</Toast>
</div>
