import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import QuizIcon from "@components/icon/QuizIcon";
import { Col, Row } from "antd";

const headerStyle: React.CSSProperties = {
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  // borderRadius: 8,
  // overflow: "hidden",
  // width: "calc(50% - 8px)",
  // maxWidth: "calc(50% - 8px)",
};

function App() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <QuizIcon width={70} height={70} />
      </Header>
      <Content style={contentStyle}>
        <Row justify="center">
          <Col span={24} lg={{ span: 16 }}>
            col
            <Outlet />
          </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}></Footer>
    </Layout>
  );
}

export default App;
