<div style={{"display": "flex", "flexDirection": "column"}}>
  <Accordion items={[{"title": "Password Reset", "content": <Text as='p' >{'Go to settings and click `Reset Password`.'}</Text>}, {"title": "Billing Questions", "content": <Text as='p' >{'Email billing@example.com.'}</Text>}, {"title": "Technical Issues", "content": <Text as='p' >{'Submit a ticket at /support/ticket.'}</Text>}, {"title": "Account Deletion", "content": <Text >{'Visit /account/delete to begin the process.'}</Text>}]} />
  <Link url={"/support/contact"} >{"Contact Support"}</Link>
</div>

