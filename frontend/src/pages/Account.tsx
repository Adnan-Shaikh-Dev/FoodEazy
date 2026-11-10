import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext";

const Account = () => {
  const { user } = useAppData();
  const firstLetter = user?.name.charAt(0).toUpperCase();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
  };
  return <div>Account</div>;
};

export default Account;
