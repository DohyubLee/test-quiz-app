import useStore from "@stores/store";
import { Button, Space } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const { startTimer, setIntervalId } = useStore();
  const navigate = useNavigate();

  const startQuiz = () => {
    const intervalId = startTimer();
    setIntervalId(intervalId);
    navigate("/test/1");
  };
  useEffect(() => {
    // 최초에서 모든 데이터 리셋처리 여기서 해야함
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
