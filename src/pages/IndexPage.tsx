import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();
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
          navigate("/test");
        }}
      >
        퀴즈 풀기 시작하기
      </Button>
    </div>
  );
}

export default IndexPage;
