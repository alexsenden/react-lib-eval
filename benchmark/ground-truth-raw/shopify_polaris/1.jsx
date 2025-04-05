<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar source={'https://picsum.photos/150'} accessibilityLabel={'Avatar'} />
      <Badge tone={'info'} >{isOnline ? "Online" : "Offline"}</Badge>
    </div>
    <Text as='h1' >{"John Doe"}</Text>
    <Text as='p' >{"Frontend Developer passionate about React."}</Text>
    <Button onClick={() => setFollowing(!following)} tone='success' >{following ? "Unfollow" : "Follow"}</Button>
    <Link url={"/profile"} >{"View Profile"}</Link>
  </div>
</Card>
