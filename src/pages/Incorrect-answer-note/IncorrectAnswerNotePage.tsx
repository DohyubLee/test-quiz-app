import {
  ArrowLeftOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import useStore, { CustomQuiz } from "@stores/store";
import { Button, Card, Radio, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;
const parser = new DOMParser();

function IncorrectAnswerNotePage() {
  const { quizList } = useStore();
  const navigate = useNavigate();

  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
        paddingTop: 40,
      }}
    >
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => {
          navigate(-1);
        }}
      >
        결과 현황으로
      </Button>
      <Title>오답노트</Title>
      {quizList
        .filter(
          (item: CustomQuiz) => item.correct_answer !== item.selectedAnswer
        )
        .map((item) => {
          const decodedText = parser.parseFromString(item.question, "text/html")
            .body.textContent;
          const options = [item.correct_answer, ...item.incorrect_answers];
          return (
            <Card
              rootClassName="quiz-card"
              title={decodedText}
              key={item.order}
            >
              <Radio.Group value={item.selectedAnswer} disabled>
                <Space direction="vertical">
                  {options.map((option: string, index: number) => {
                    return (
                      <Radio value={option} key={index}>
                        {option === item.selectedAnswer ? (
                          <Text type="danger">
                            {option} <CloseOutlined />
                          </Text>
                        ) : option === item.correct_answer ? (
                          <Text type="success">
                            {option} <CheckOutlined />
                          </Text>
                        ) : (
                          <Text>{option}</Text>
                        )}
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            </Card>
          );
        })}
    </Space>
  );
}

export default IncorrectAnswerNotePage;
