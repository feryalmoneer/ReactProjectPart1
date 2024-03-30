import { createContext, useContext, useState } from "react";

const MyContext = createContext();


 export const useMyContext =()=>{
    return useContext(MyContext);
}
export const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartQyn={
    cart , setCart,
  };
  return <MyContext.Provider  value={cartQyn}>
    
    {children}
    </MyContext.Provider>;
};

export default MyContext;
