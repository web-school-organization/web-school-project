import { createContext, useEffect, useState } from "react";

import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {

      console.log(localStorage.getItem("@WebSchool:UserId"));
      api
        .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
        .then((res) => {
          setUser(res.data);
          console.log(res);
        })
        .catch((e) => console.log(e));

  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
