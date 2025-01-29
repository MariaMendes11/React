import React from "react";

function click() {
  alert("Você clicou no botão e criou um item");
}

function ButtonCreate() {
    return (
      <div>
        <button
          style={{padding: "10px 20px",cursor: "pointer",color:'green'}}
          onClick={() => click()}
        >
          ButtonCreate
        </button>
      </div>
    );
  }
  
  export default ButtonCreate;