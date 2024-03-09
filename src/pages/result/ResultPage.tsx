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
  Space,
  Typography,
} from "antd";
import React from "react";
const { Title, Text } = Typography;

function ResultPage() {
  const { currentTime, quizList } = useStore();
  return (
    <div>
      <Title>결과 확인하기</Title>
      <Title level={3}>소요시간 : {formatTime(currentTime)}</Title>
      <Card
        title="정답률"
        extra={
          <Button
            type="primary"
            size="small"
            onClick={() => {
              console.log("오답노트 보러가기");
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
                  정답 개수 <b>7</b>
                </p>
              }
            />
            <Badge
              status="error"
              text={
                <p style={{ display: "inline" }}>
                  오답 개수 <b>7</b>
                </p>
              }
            />
          </Col>
          <Col>
            {/* <Text strong>정답률</Text> */}
            <Progress
              percent={30}
              success={{
                percent: 30,
              }}
              type="circle"
              trailColor="#FF4D4F"
            />
          </Col>
        </Row>
      </Card>
      <Flex justify="center" style={{ paddingTop: 40 }}>
        <Button>처음으로 돌아가기</Button>
      </Flex>
    </div>
  );
}

export default ResultPage;
