<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={'https://picsum.photos/150'} alt={'Avatar'} />
      <Badge text={isOnline ? "Online" : "Offline"} type={'primary'} />
    </div>
    <Text as='h1' >{"John Doe"}</Text>
    <Text as='p' >{"Frontend Developer passionate about React."}</Text>
    <Button kind='primary' onClick={() => setFollowing(!following)} >{following ? "Unfollow" : "Follow"}</Button>
    <Link href={"/profile"} >{"View Profile"}</Link>
  </div>
</Card>
