import { Navigate } from 'react-router-dom';
export default function UnProtectedRoutes({children}) {
  const token = localStorage.getItem('userToken');
  if(token){
    return children;
  }
  return< Navigate to='/SignIn'  replace  />;
}

