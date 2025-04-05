<Card>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar img={'https://picsum.photos/150'} alt={'Avatar'} />
      <Badge color={'info'}>{isOnline ? "Online" : "Offline"}</Badge>
    </div>
    <Text type={'title'} text={"John Doe"} />
    <Text type={'body'} text={"Frontend Developer passionate about React."} />
    <Button color='info' onClick={() => setFollowing(!following)} >{following ? "Unfollow" : "Follow"}</Button>
    <Link href={"/profile"} text={"View Profile"} />
  </div>
</Card>
