const Product = ({
  products,
  deleteProduct,
  editProduct,
  softDeleteProduct,
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product) =>
              product.isActive ? (
                <div
                  key={product.id}
                  className="col-xl-4 col-lg-6 col-md-6 col-12 mb-5"
                >
                  <div className="meal-item">
                    <div className="product-card">
                      <img src={product.image} alt={product.name}></img>

                      <div className="px-3 py-4">
                        <h3>{product.name}</h3>

                        <div className="price">Price: ${product.price}</div>
                      </div>
                      <div className="form py-2 text-center">
                        <button
                          className="button-edit"
                          onClick={() => editProduct(product.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="button-delete"
                          onClick={() => softDeleteProduct(product.id, product)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
        </div>
      </div>
    </>
  );
};

export default Product;
