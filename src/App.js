import CreateAllProduct from "./components/CreateAllProduct";
import AddProducts from "./components/AddProducts";
import { useState } from "react";

const App = () => {

  const products = [
    { type: "mobile iphone", price: 10000000, id: 1 },
    { type: "laptop Dell", price: 16000000, id: 2 },
  ];

  // const [arr, setArr] = useState({arr : ''});

  const allDatas = (argObj) => {
    console.log(argObj);
    products.push(argObj);
    console.log("aaaa");
    console.log(products);
  };

  console.log("bbb");
  return (
    <div>
      {products.map((product) => {
        return <CreateAllProduct key={product.id} item={product} />;
      })} 

      <AddProducts parentFunc={allDatas} /> 
    </div>
  );
};

export default App;
