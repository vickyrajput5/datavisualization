import axios from "axios";
import { FrontendUpdateData, Tip } from "./types";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchTipsData = async (): Promise<Tip[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data/tips`);
    return response.data;
  } catch (error) {
    console.log("Fetching error", error);
    throw error;
  }
};

export const sendUpdateToBackend = async (
  data: FrontendUpdateData
): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/data/update`, data);
  } catch (error) {
    console.error("Error sending update to backend:", error);
    throw error;
  }
};
