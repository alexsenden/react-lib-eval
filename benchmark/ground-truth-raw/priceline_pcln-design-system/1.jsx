<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar altText={'Avatar'} src={'https://picsum.photos/150'} size='40' />
      <Badge bg={'blue'} >{isOnline ? "Online" : "Offline"}</Badge>
    </div>
    <Text textStyle='title1' >{"John Doe"}</Text>
    <Text textStyle='paragraph' >{"Frontend Developer passionate about React."}</Text>
    <Button color={'primary'} onClick={() => setFollowing(!following)}>{following ? "Unfollow" : "Follow"}</Button>
    <Link href={"/profile"}>{"View Profile"}</Link>
  </div>
</Card>
