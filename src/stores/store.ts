import { fetchQuizList } from "@apis/quizApi";
import { create } from "zustand";
import _, { cloneDeep } from "lodash";

export interface Quiz {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface CustomQuiz extends Quiz {
  order: number;
  selectedAnswer?: string;
}

interface Store {
  count: number;
  inc: () => void;
  fetchQuizList: (amount?: number) => Promise<any>;
  quizList: CustomQuiz[];
  setQuizList: (order: number, answer: string) => void;
}

const useStore = create<Store>((set) => ({
  count: 1,
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  quizList: [],
  fetchQuizList: async (amount = 10) => {
    const data = await fetchQuizList(amount);
    set((state) => ({
      quizList: data.results.map((item: Quiz, index: number) => ({
        ...item,
        order: index + 1,
      })),
    }));
  },
  setQuizList: (order: number, answer: string) => {
    set((state) => {
      const copy = cloneDeep(state.quizList);
      return {
        quizList: copy.map((item) => {
          if (item.order === order) {
            return { ...item, selectedAnswer: answer };
          }
          return item;
        }),
      };
    });
  },
}));

export default useStore;
