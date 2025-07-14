import axios from "axios";

const API_BASE = "http://localhost:8080/api";

export const login = async (email, password) => {
  return axios.post(`${API_BASE}/auth/login`, { email, password });
};

export const signup = async (name, email, password) => {
  return axios.post(`${API_BASE}/auth/signup`, { name, email, password });
};

export const getProfile = async (token) => {
  return axios.get(`${API_BASE}/auth/profile`, { headers: { Authorization: `Bearer ${token}` } });
};

export const createRoom = async (roomName, passcode, token) => {
  return axios.post(`${API_BASE}/rooms`, { roomName, passcode }, { headers: { Authorization: `Bearer ${token}` } });
};

export const joinRoom = async (passcode, token) => {
  return axios.post(`${API_BASE}/rooms/join`, { passcode }, { headers: { Authorization: `Bearer ${token}` } });
};

export const getRooms = async (token) => {
  return axios.get(`${API_BASE}/rooms`, { headers: { Authorization: `Bearer ${token}` } });
};

export const sendMessage = async (roomId, message, token) => {
  return axios.post(`${API_BASE}/chat/send`, { roomId, message }, { headers: { Authorization: `Bearer ${token}` } });
};

export const getMessages = async (roomId, token) => {
  return axios.get(`${API_BASE}/chat/${roomId}`, { headers: { Authorization: `Bearer ${token}` } });
};

export const getTasks = async (token) => {
  return axios.get(`${API_BASE}/tasks`, { headers: { Authorization: `Bearer ${token}` } });
};

export const updateTask = async (taskId, updates, token) => {
  return axios.put(`${API_BASE}/tasks/${taskId}`, updates, { headers: { Authorization: `Bearer ${token}` } });
};

export const createMeeting = async (meeting, token) => {
  return axios.post(`${API_BASE}/meetings`, meeting, { headers: { Authorization: `Bearer ${token}` } });
};

export const getMeetings = async (token) => {
  return axios.get(`${API_BASE}/meetings`, { headers: { Authorization: `Bearer ${token}` } });
};

export const uploadFile = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${API_BASE}/files/upload`, formData, { headers: { Authorization: `Bearer ${token}` } });
};

export const getNotifications = async (token) => {
  return axios.get(`${API_BASE}/notifications`, { headers: { Authorization: `Bearer ${token}` } });
};

export const getActivity = async (token) => {
  return axios.get(`${API_BASE}/activity`, { headers: { Authorization: `Bearer ${token}` } });
};

export const submitSurvey = async (responses, token) => {
  return axios.post(`${API_BASE}/survey`, responses, { headers: { Authorization: `Bearer ${token}` } });
};

export const getSurvey = async (token) => {
  return axios.get(`${API_BASE}/survey`, { headers: { Authorization: `Bearer ${token}` } });
};
