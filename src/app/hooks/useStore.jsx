import { create } from 'zustand';

const useStore = create((set) => ({
  filter: 'default', // 初始值
  work: null,
  info: null,
  setFilter: (newFilter) => set({ filter: newFilter }),
  setWork: (newWork) => set({ work: newWork }),
  setInfo: (newInfo) => set({ info: newInfo }),
}));

export default useStore;
