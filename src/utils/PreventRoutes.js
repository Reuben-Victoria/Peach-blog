import { Outlet, Navigate } from 'react-router-dom';
const PreventRoutes = () => {
  const auth = localStorage.getItem('userToken');
  console.log(auth, 'Token');
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PreventRoutes;
