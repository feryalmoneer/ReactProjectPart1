import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserInfo = createContext();
const UserInfoProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  const [UserName, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const getUserData = () => {
    if (userToken != null) {
      const decoded = jwtDecode(userToken);
      setUserName(decoded.userName);
      setIsLogin(true);
    } else {
      setUserName(null);
      setIsLogin(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, [userToken]);
  return (
    <UserInfo.Provider
      value={{ userToken, setUserToken, isLogin, setUserName, UserName }}
    >
      {children}
    </UserInfo.Provider>
  );
};
export default UserInfoProvider;
