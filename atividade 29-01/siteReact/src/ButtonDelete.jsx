import React from "react";

function click() {
  alert("Você clicou no botão e deletou um item");
}

function ButtonDelete() {
  return (
    <div>
      <button
        style={{ padding: "10px 20px",cursor: "pointer",color:'red'}}
        onClick={() => click()}
      >
        ButtonDelete
      </button>
    </div>
  );
}

export default ButtonDelete;