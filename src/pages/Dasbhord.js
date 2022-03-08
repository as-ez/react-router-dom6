import { useNavigate } from "react-router-dom";

export default function Dasbhord() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dasbhord</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
