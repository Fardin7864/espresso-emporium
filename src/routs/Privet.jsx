import { useContext } from "react";
import { AuthContext } from "../provider/GlobalAuthProv";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
        <Footer />
      </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default Private;
