import React from "react";
import ItemDescription from "./ItemDescription";

const Product = ({name, description, price}) => {
    return (
      <div>
        <ItemDescription name={name} description={description}></ItemDescription>
        <h4>Price: ${price}</h4>
      </div>
    )
  }

  export default Product;