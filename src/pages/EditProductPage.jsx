import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../contexts/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";

const init = {
  title: "",
  price: "",
};

function EditProductPage() {
  const { getOneProduct, oneProduct, editProduct } =
    useContext(productsContext);
  const [product, setProduct] = useState(init);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
    console.log(product);
    setProduct(init);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="title"
          name="title"
          value={product.title}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="price"
          name="price"
          value={product.price}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
