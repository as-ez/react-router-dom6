import { Link, useNavigate, Outlet } from "react-router-dom";

export default function Dasbhord() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Outlet />
      <button onClick={handleClick}>Logout</button>

      <br/>

      <Link to="welcome">say welcome</Link>

      <br/>

      <Link to="goodbye">say goodbye</Link>
    </div>
  );
}
