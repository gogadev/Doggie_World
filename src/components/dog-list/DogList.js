import React from "react";

import img from "../../assets/paw.png";

import "./dog-list.style.css";

const DogList = ({ dogs }) => {
  return (
    <div className="dog-list">
      <div className="list">
        {dogs &&
          dogs.map((dog, i) => {
            return (
              <div className="dogs" key={i}>
                <img className="dog" src={dog} alt="" />
                <button className="btn">
                  <span>
                    <img className="img" src={img} alt="" />
                  </span>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DogList;
