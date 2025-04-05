<div style={{"display": "flex", "flexDirection": "column"}}>
 <Button color={"primary"} onClick={() => setShowCart(true)}>{"View Cart"}</Button>
 <Modal isOpen={showCart} onClose={() => setShowCart(false)} title={"Your Cart"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <List.ol ><li>{cartItems}</li></List.ol> <Text textStyle='paragraph' >{`Total: $`}</Text> <Button color={"primary"}>{"Checkout"}</Button> </div> } />
</div>

