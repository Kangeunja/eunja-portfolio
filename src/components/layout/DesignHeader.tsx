import { useNavigate } from "react-router-dom";

const DesignHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="design-detail__header">
      <div className="design-detail__container">
        <div className="design-detail__logo" onClick={() => navigate("/")}>
          Eunja’s Portfolio
        </div>
        <button className="design-detail__back" onClick={() => navigate(-1)}>
          back
        </button>
      </div>
    </div>
  );
};

export default DesignHeader;
