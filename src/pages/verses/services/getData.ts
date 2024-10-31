import axios from "axios";

export const getData = async () => {
  const res = await axios.get("http://localhost:8000/verses");
  return res.data;
};
