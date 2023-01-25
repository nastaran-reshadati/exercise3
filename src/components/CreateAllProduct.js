import React from 'react'

const CreateAllProduct = ({ item }) => {
  return (
    <div className="m-2">
      <div
        style={{ background: "#6272a4" }}
        className="text-light w-50 m-auto text-center p-3 m-3"
      >
        <div className=" h5 item-type mp-1">
          نوع محصول : <span style={{ fontSize: "17px" }}>{item.type}</span>
        </div>
        <div className=" h5 item-type mt-4">
          قیمت محصول : <span style={{ fontSize: "17px" }}>{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CreateAllProduct;