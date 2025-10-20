import { createContext, useState } from "react";

export const userContext = createContext(undefined);

export const userProvider = ({ children }: any) => {
  const [user, setUser] = useState("");

  return (
    <userContext.prototype value={{ user, setUser }}>
      {children}
    </userContext.prototype>
  );
};


