import axios from "axios";

export const getTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);
  return response.data;
};
export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions${id}`, data);
  return response.data;
};
export const edeleteTransaction = async (id) => {
  const response = await axios.delete(`/transactions${id}`);
  return response.data;
};
