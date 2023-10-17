import { CSSProperties } from "react";
import "./LoadingSpinner.scss";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "FFE4C4",
};

const LoadingSpinner = () => {
  return (
    <div>
      <ClipLoader cssOverride={override} color="#FFE4C4" size={69} />
    </div>
  );
};

export default LoadingSpinner;
