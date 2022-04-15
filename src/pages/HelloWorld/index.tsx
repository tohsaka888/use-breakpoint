import React from "react";
import { useNavigate } from "react-router-dom";
import useBreakPoint from "../../hook/useBreakPoint";
import "./index.less";

function HelloWorld() {
  const navigate = useNavigate();
  const deferedWindth = useBreakPoint();
  return (
    <div className="container">
      <div className="text">HelloWorld</div>
      <div className="button" onClick={() => navigate(-1)}>
        {deferedWindth.deferedSize}
      </div>
    </div>
  );
}

export default HelloWorld;
