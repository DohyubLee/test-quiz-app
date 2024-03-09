import { fetchQuizList } from "@apis/quizApi";
import { create } from "zustand";

interface Quiz {
  category: string;
  correct_answer: string;
  difficulty: string;
}

interface Store {
  count: number;
  inc: () => void;
  fetchQuizList: (amount?: number) => void;
  quizList: any[];
}

const useStore = create<Store>((set) => ({
  count: 1,
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  quizList: [],
  fetchQuizList: async (amount = 10) => {
    const data = await fetchQuizList(amount);
    set((state) => ({ quizList: data.results }));
  },
}));

export default useStore;
