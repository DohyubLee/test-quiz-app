import useStore from "@stores/store";
import { Button, Space } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const {
    startTimer,
    setIntervalId,
    quizList,
    intervalId,
    currentTime,
    stopTimer,
    reset,
  } = useStore();
  const navigate = useNavigate();

  const startQuiz = () => {
    const intervalId = startTimer();
    setIntervalId(intervalId);
    navigate("/test/1");
  };

  useEffect(() => {
    reset();
    if (intervalId) {
      stopTimer(intervalId);
    }
  }, []);
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        type="primary"
        size="large"
        onClick={() => {
          startQuiz();
        }}
      >
        퀴즈 시작하기
      </Button>
    </div>
  );
}

export default IndexPage;
