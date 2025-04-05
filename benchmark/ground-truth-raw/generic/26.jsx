<div style={{"display": "flex", "flexDirection": "column"}}>
 <Button text={"View Cart"} type={"primary"} onClick={() => setShowCart(true)} />
 <Modal isOpen={showCart} onClose={() => setShowCart(false)} title={"Your Cart"} content={ <div style={{"display": "flex", "flexDirection": "column"}}> <List items={cartItems} /> <Text type={"body"} text={`Total: $`} /> <Button text={"Checkout"} type={"primary"} /> </div> } />
</div>

