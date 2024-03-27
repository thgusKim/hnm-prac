import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={showDetail}>
      <img className="card-img" src={item?.img} alt="" />
      <div>{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
