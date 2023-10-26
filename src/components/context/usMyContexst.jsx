import { useContext } from "react";
import { MyContext } from "./contextProvider";

export const useMyContext = () => useContext(MyContext);
