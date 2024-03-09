import useStore from "@stores/store";
import { formatTime } from "@utils/formatUtile";
import {
  Badge,
  Button,
  Card,
  Col,
  Flex,
  Progress,
  Row,
  Typography,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function ResultPage() {
  const navigate = useNavigate();
  const { currentTime, quizList } = useStore();
  const correctAnswerCount = quizList.filter(
    (quiz) => quiz.correct_answer === quiz.selectedAnswer
  ).length;
  const correctRate = Math.floor((correctAnswerCount / quizList.length) * 100);

  return (
    <div>
      <Title>결과 확인하기</Title>
      <Title level={3}>소요시간 : {formatTime(currentTime)}</Title>
      <Card
        title="결과 현황"
        extra={
          <Button
            type="primary"
            size="small"
            onClick={() => {
              navigate(`/Incorrect-answer-note`);
            }}
          >
            오답노트
          </Button>
        }
      >
        <Row justify={"center"} gutter={80}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Badge
              status="success"
              text={
                <p style={{ display: "inline" }}>
                  정답 개수 <b>{correctAnswerCount}</b>
                </p>
              }
            />
            <Badge
              status="error"
              text={
                <p style={{ display: "inline" }}>
                  오답 개수 <b>{quizList.length - correctAnswerCount}</b>
                </p>
              }
            />
          </Col>
          <Col>
            <Progress
              percent={correctRate}
              success={{
                percent: correctRate,
              }}
              type="circle"
              trailColor="#FF4D4F"
            />
          </Col>
        </Row>
      </Card>
      <Flex justify="center" style={{ paddingTop: 40 }}>
        <Button
          onClick={() => {
            navigate(`/`);
          }}
        >
          처음으로 돌아가기
        </Button>
      </Flex>
    </div>
  );
}

export default ResultPage;
