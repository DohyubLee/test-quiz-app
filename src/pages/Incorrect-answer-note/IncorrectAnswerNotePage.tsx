import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import useStore from "@stores/store";
import { Button, Card, Radio, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

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
      <Card rootClassName="quiz-card" title={"decodedText"}>
        <Radio.Group onChange={(e) => {}} value={1}>
          <Space direction="vertical">
            <Radio value={1}>
              <div>
                <Text>{1}</Text>
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </Card>
      <Card rootClassName="quiz-card" title={"decodedText"}>
        <Radio.Group onChange={(e) => {}} value={1}>
          <Space direction="vertical">
            <Radio value={1}>
              <div>
                <Text>{1}</Text>
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </Card>
      <Card rootClassName="quiz-card" title={"decodedText"}>
        <Radio.Group onChange={(e) => {}} value={1}>
          <Space direction="vertical">
            <Radio value={1}>
              <div>
                <Text>{1}</Text>
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </Card>
    </Space>
  );
}

export default IncorrectAnswerNotePage;
