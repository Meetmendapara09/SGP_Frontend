import { create } from "zustand";

const useAppStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  rooms: [],
  setRooms: (rooms) => set({ rooms }),

  notifications: [],
  setNotifications: (notifications) => set({ notifications }),

  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  activities: [],
  setActivities: (activities) => set({ activities }),

  meetings: [],
  setMeetings: (meetings) => set({ meetings }),

  surveyResponses: [],
  setSurveyResponses: (surveyResponses) => set({ surveyResponses }),

  // Add more global state as needed
}));

export default useAppStore;
