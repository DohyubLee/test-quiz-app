import useStore from "@stores/store";
import { Button } from "antd";
import React, { useEffect } from "react";

function TestPage() {
  const { count, inc, fetchQuizList, quizList } = useStore();
  console.log("quizList", quizList);
  useEffect(() => {
    // fetchQuizList(10);
  }, []);
  return <div>TestPage</div>;
}

export default TestPage;
