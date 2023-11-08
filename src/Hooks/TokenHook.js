import { useContext } from "react";
import { TokenContext } from "../Context/TokenContext";

export const TokenHooks = () => {
  const {token , setToken} = useContext(TokenContext)
  return {token , setToken}
}