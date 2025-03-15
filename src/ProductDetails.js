/* import { useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [tot, setTot] = useState("");
  const [arr, setArr] = useState([]); // Use state for arr to trigger re-render

  const total = () => {
    if (product.length === 0 || qty.toString().length === 0 || price.toString().length === 0) {
      alert("Please enter a valid value");
      setTot("");
    } else {
      let a = qty * price;
      setTot(a);
    }
  };

  const prod = () => {
    const obj = {
      ProductName: product,
      Quantity: qty,
      Price: price,
      Total: qty * price
    };

    setArr([...arr, obj]); // Update arr state to trigger re-render
    setProduct(""); // Clear inputs after adding
    setQty("");
    setPrice("");
    setTot("");
  };

  return (
    <>
      <div>
        <label>Product Name: </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />{" "}
        <br /> <br />

        <label>Quantity: </label>
        <input
          type="number"
          placeholder="Enter Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          required
        />{" "}
        <br /> <br />

        <label>Price: </label>
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onKeyUp={() => total()}
          onChange={(e) => setPrice(e.target.value)}
          required
        />{" "}
        <br />

        <label>Total:</label>
        <h1>{tot}</h1>

        <button onClick={() => prod()}>Add Product</button>

        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((ele, index) => (
              <tr key={index}>
                <td>{ele.ProductName}</td>
                <td>{ele.Quantity}</td>
                <td>{ele.Price}</td>
                <td>{ele.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductDetails;
 */