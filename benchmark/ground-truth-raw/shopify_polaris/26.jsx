<div style={{"display": "flex", "flexDirection": "column"}}>
 <Button onClick={() => setShowCart(true)} tone='success' >{"View Cart"}</Button>
 <Modal open={showCart} onClose={() => setShowCart(false)} title={"Your Cart"} ><Modal.Section>{ <div style={{"display": "flex", "flexDirection": "column"}}> <List ordered ><List.Item>{cartItems}</List.Item></List> <Text as='p' >{`Total: $`}</Text> <Button tone='success' >{"Checkout"}</Button> </div> }</Modal.Section></Modal>
</div>

