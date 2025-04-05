<div style={{"display": "flex", "flexDirection": "column"}}>
 <Button kind='primary' onClick={() => setShowCart(true)} >{"View Cart"}</Button>
 <Modal modalHeading={"Your Cart"} open={showCart} onRequestClose={() => setShowCart(false)} >{ <div style={{"display": "flex", "flexDirection": "column"}}> <UnorderedList ><ListItem>{cartItems}</ListItem></UnorderedList> <Text as='p' >{`Total: $`}</Text> <Button kind='primary' >{"Checkout"}</Button> </div> }</Modal>
</div>

