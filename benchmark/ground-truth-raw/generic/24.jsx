<div style={{"display": "flex", "flexDirection": "column"}}>
  <Accordion items={[{"title": "Password Reset", "content": <Text type={'body'} text={'Go to settings and click `Reset Password`.'} />}, {"title": "Billing Questions", "content": <Text type={'body'} text={'Email billing@example.com.'} />}, {"title": "Technical Issues", "content": <Text type={'body'} text={'Submit a ticket at /support/ticket.'} />}, {"title": "Account Deletion", "content": <Text text={'Visit /account/delete to begin the process.'} />}]} />
  <Link href={"/support/contact"} text={"Contact Support"} />
</div>

