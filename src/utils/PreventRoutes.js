import { Outlet, Navigate } from 'react-router-dom';
const PreventRoutes = () => {
  const auth = localStorage.getItem('userToken');
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PreventRoutes;
