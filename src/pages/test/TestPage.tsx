import useStore from "@stores/store";
import { Button, Card, Space } from "antd";
import React, { useEffect, useState } from "react";

function TestPage() {
  const { fetchQuizList, quizList } = useStore();
  const [currentQuizNum, setCurrentQuizNum] = useState(0);
  console.log("quizList", quizList);

  useEffect(() => {
    // fetchQuizList(10);
  }, []);
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
      }}
    >
      <Card
        title="Default size card"
        // extra={<a href="#">More</a>}
        // style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

export default TestPage;
