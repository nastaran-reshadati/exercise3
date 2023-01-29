import CreateAllProduct from "./components/CreateAllProduct";
import AddProducts from "./components/AddProducts";
import { useState } from "react";

const App = () => {

  const [arr, setArr] = useState( [
    { type: "mobile iphone", price: 10000000, id: 1 },
    { type: "laptop Dell", price: 16000000, id: 2 },
  ]);

  const allDatas = (argObj) => {
    console.log('new obj',argObj);
    setArr([...arr ,argObj])
    console.log(arr);
  };

  return (
    <div>
      {arr.map((product) => {
        return <CreateAllProduct key={product.id} item={product} />;
      })} 

      <AddProducts parentFunc={allDatas} /> 
      <br /><br />
    </div>
  );
};

export default App;
