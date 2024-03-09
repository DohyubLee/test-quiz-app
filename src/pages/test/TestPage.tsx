import useStore, { CustomQuiz } from "@stores/store";
import { formatTime } from "@utils/formatUtile";
import { Button, Card, Radio, RadioChangeEvent, Space, Typography } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const { Text } = Typography;
const parser = new DOMParser();

function TestPage() {
  const {
    fetchQuizList,
    quizList,
    setQuizList,
    currentTime,
    stopTimer,
    intervalId,
  } = useStore();
  let { testId } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log("quizList", quizList);
  console.log("testId", testId);

  const fetchList = useCallback(async () => {
    setLoading(true);
    await fetchQuizList(10);
    setLoading(false);
  }, []);

  const nextQuiz = useCallback(
    (testId: number) => {
      if (testId < quizList.length) {
        navigate(`/test/${testId + 1}`);
      } else {
        // 타이머 종료
        if (intervalId) {
          stopTimer(intervalId);
        }
      }
    },
    [quizList.length, intervalId]
  );

  const onChange = (e: RadioChangeEvent, order: number) => {
    const answer = e.target.value;
    setQuizList(order, answer);
  };

  useEffect(() => {
    // fetchList();
  }, []);
  return (
    <Space
      direction="vertical"
      // size="middle"
      style={{
        display: "flex",
        paddingTop: 40,
      }}
    >
      {quizList
        .filter(
          (item: CustomQuiz, index: number) => item.order === Number(testId)
        )
        .map((item) => {
          const decodedText = parser.parseFromString(item.question, "text/html")
            .body.textContent;
          console.log("item", item);
          const options = [item.correct_answer, ...item.incorrect_answers];
          console.log("options", options);
          return (
            <Card
              rootClassName="quiz-card"
              title={decodedText}
              extra={
                <Button
                  type="primary"
                  size="small"
                  onClick={() => {
                    nextQuiz(Number(testId));
                  }}
                  disabled={!item.selectedAnswer}
                >
                  다음 문제
                </Button>
              }
              loading={loading}
            >
              <Radio.Group
                onChange={(e) => onChange(e, item.order)}
                value={item.selectedAnswer}
              >
                <Space direction="vertical">
                  {options.map((option) => {
                    return (
                      <Radio value={option}>
                        <div>
                          {item.selectedAnswer ? (
                            option === item.selectedAnswer ? (
                              <Text
                                type={
                                  option === item.correct_answer
                                    ? "success"
                                    : "danger"
                                }
                              >
                                {option}{" "}
                                {option === item.correct_answer
                                  ? "정답입니다."
                                  : "오답입니다."}
                              </Text>
                            ) : (
                              <Text>{option}</Text>
                            )
                          ) : (
                            <Text>{option}</Text>
                          )}
                        </div>
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            </Card>
          );
        })}
      {formatTime(currentTime)}
    </Space>
  );
}

export default TestPage;
