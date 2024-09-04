"use client"
import React, { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import axios from "axios";

export const ShopDiamondShape = () => {
  const [shapeData, setShapeData] = useState([]);

  useMemo(() => {
    axios
      .get(`http://ec2-3-18-62-57.us-east-2.compute.amazonaws.com/admin/api/v1/diamondshape`)
      .then((res) => {
        setShapeData(res.data.data);
      })
      .catch(() => {
        console.log("API error");
      });
  }, []);
  return (
    <>
      <div className="ShopDiamondShape">
        <div className="container">
          <h3>Shop Diamonds by Shape</h3>
          <div className="flex">
            {shapeData?.map((shapeItem, i) => {
              return (
               
                  <div className="ShopDiamondShape-img-text" key={i}>
                    <Link href="#">
                      <div className="own-ring-white">
                      <LazyLoadImage src={shapeItem.icon} alt={shapeItem.shape}  width="auto"  height="auto"  />

                      </div>
                      <span>{shapeItem.shape}</span>
                    </Link>
                  </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
