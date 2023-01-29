import { useState } from "react";

const AddProducts = (props) => {
  const [inputData, setInputData] = useState({ type: "", price: "" });

  const changeHandler = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  }

  console.log(inputData);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="w-50 mx-auto">
            <label className="my-1 mt-3">نام محصول را وارد کنید : </label>
            <input
              onChange={changeHandler}
              name="type"
              type="text"
              className="form-control"
            />
          </div>
          <div className="w-100"></div>

          <div className="w-50 mx-auto my-3">
            <label className="my-1">قیمت محصول را وارد کنید :</label>

            <input
              onChange={changeHandler}
              name="price"
              type="text"
              className="form-control"
            />
          </div>
          <button
          onSubmit={submitForm}
          style={{backgroundColor :"#bd93f9"}}
            type="submit"
            onClick={() => props.parentFunc(inputData)}
            className="btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
