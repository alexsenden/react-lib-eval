<div style={{"display": "flex", "flexDirection": "column"}}>
  <Accordion items={[{"headerLabel": <Text>Password Reset</Text>, content: <Text textStyle='paragraph' >{'Go to settings and click `Reset Password`.'}</Text>}, {"headerLabel": <Text>Billing Questions</Text>, content: <Text textStyle='paragraph' >{'Email billing@example.com.'}</Text>}, {"headerLabel": <Text>Technical Issues</Text>, content: <Text textStyle='paragraph' >{'Submit a ticket at /support/ticket.'}</Text>}, {"headerLabel": <Text>Account Deletion</Text>, content: <Text >{'Visit /account/delete to begin the process.'}</Text>}]} />
  <Link href={"/support/contact"}>{"Contact Support"}</Link>
</div>

