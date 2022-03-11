import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedPage = ({
  children,
  needsLogin = false,
  guestsOnly = false,
  allowedRoles = [],
}) => {
  const userSelector = useSelector((state) => state.auth);

  if (needsLogin && guestsOnly) {
    throw new Error("Only use either `needsLogin` or `guestsOnly` as props");
  }

  // jika needsLogin = true, berarti user harus
  // login untuk bisa akses halaman ini
  if (needsLogin && !userSelector.id) {
    return <Navigate to="/" />;
  }

  // jika guestsOnly = true, berarti hanya user
  // yang belum login bisa akses halaman ini
  if (guestsOnly && userSelector.id) {
    return <Navigate to="/" />;
  }

  if (allowedRoles.length && !allowedRoles.includes(userSelector.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedPage;
