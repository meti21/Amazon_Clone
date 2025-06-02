import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function ProtectedRoute({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, msg, redirect, navigate]);

  // We use conditional rendering to avoid showing protected content before redirecting — without it, children would render immediately on first load even if the user is null, since useEffect runs after the initial render.

  return user ? children : null;
}

export default ProtectedRoute;
