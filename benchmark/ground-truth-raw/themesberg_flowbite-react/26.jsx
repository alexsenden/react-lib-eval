<div style={{"display": "flex", "flexDirection": "column"}}>
 <Button color='info' onClick={() => setShowCart(true)} >{"View Cart"}</Button>
 <Modal onClose={() => setShowCart(false)} popup={showCart} ><Modal.Header>{"Your Cart"}</Modal.Header><Modal.Body>{ <div style={{"display": "flex", "flexDirection": "column"}}> <List ordered ><List.Item>{cartItems}</List.Item></List> <Text type={"body"} text={`Total: $`} /> <Button color='info' >{"Checkout"}</Button> </div> }</Modal.Body></Modal>
</div>

