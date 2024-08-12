function Products(product)
{
    // setting the component props (properties)
    const name = product.name;
    const description = product.description;
    const price = product.price;
    const stock = product.stock;
    
    return(
        <div>
            <h2>{name}</h2>
            <h3>Description</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>In stock: {product.stock}</p>
        </div>
    );
}

export default Products;