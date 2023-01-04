import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const { success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!success) {
      navigate('/login', { replace: true });
    }
  }, [success]);

  return children;
}

export default RequireAuth;
