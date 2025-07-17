import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ProdcutList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
    .then(response => setProducts(response.data))
    .catch(error => console.log(error));
  }, []);

  return(
    <>
    <h1>Products</h1>
    <ul>
      {products.map(p=> (
        <li key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </li>
      )
      )}
    </ul>
    </>
  );
}

export default ProdcutList;