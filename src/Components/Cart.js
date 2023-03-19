
const Cart = (props) => {
    const{image,name,price}=props;
    
    return(
            <div className='container'>
                <div className='col-md-12'>
                    <h3 className='text-center'>My Cart</h3>
                    {/* cartitems */}
                    <div className="d-flex justify-content-start align=items-center ">
                        <div><img  src={image} alt="."/> </div>
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
    )
}

export default Cart;