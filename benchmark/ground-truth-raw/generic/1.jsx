<Card >
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={'https://picsum.photos/150'} alt={'Avatar'} />
      <Badge text={isOnline ? "Online" : "Offline"} type={'primary'} />
    </div>
    <Text type={'title'} text={"John Doe"} />
    <Text type={'body'} text={"Frontend Developer passionate about React."} />
    <Button text={following ? "Unfollow" : "Follow"} type={'primary'} onClick={() => setFollowing(!following)} />
    <Link href={"/profile"} text={"View Profile"} />
  </div>
</Card>
