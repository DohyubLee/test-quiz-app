import api from "@apis/api";

const fetchQuizList = async (amount: number) => {
  try {
    const res = await api.get("", {
      params: {
        amount: amount,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { fetchQuizList };
