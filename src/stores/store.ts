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
  fetchQuizList: (amount?: number) => Promise<any>;
  quizList: CustomQuiz[];
  setQuizList: (order: number, answer: string) => void;
  currentTime: number;
  startTimer: () => NodeJS.Timer;
  stopTimer: (intervalId: NodeJS.Timer) => void;
  intervalId: NodeJS.Timer | null;
  setIntervalId: (intervalId: NodeJS.Timer) => void;
  reset: () => void;
}

const INITIALSTATE = {
  quizList: [],
  currentTime: 0,
  intervalId: null,
};

const useStore = create<Store>((set) => ({
  ...cloneDeep(INITIALSTATE),
  fetchQuizList: async (amount = 10) => {
    const data = await fetchQuizList(amount);
    if (data?.results) {
      set((state) => ({
        quizList:
          data.results.map((item: Quiz, index: number) => ({
            ...item,
            order: index + 1,
          })) ?? [],
      }));
    }
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
  startTimer: () => {
    // 타이머 시작 함수
    const intervalId = setInterval(() => {
      set((state) => ({ currentTime: state.currentTime + 1000 })); // 1초마다 currentTime을 업데이트
    }, 1000);
    return intervalId; // intervalId 반환 (필요시 clearInterval을 호출하기 위해)
  },
  stopTimer: (intervalId: NodeJS.Timer) => {
    // 타이머 정지 함수
    clearInterval(intervalId); // setInterval을 멈춤
  },
  setIntervalId: (intervalId: NodeJS.Timer) => {
    set((state) => ({ intervalId: intervalId }));
  },
  reset: () => {
    set((state) => ({ ...INITIALSTATE }));
  },
}));

export default useStore;
