import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import QuizIcon from "@components/icon/QuizIcon";
import { Col, Row } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";

const headerStyle: React.CSSProperties = {
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle: React.CSSProperties = {
  // textAlign: "center",
  minHeight: "calc(100vh - 179px)",
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#0958d9",
};

const footerStyle: React.CSSProperties = {
  // textAlign: "center",
  // color: "#fff",
  // backgroundColor: "#4096ff",
  paddingLeft: 0,
  paddingRight: 0,
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
        <Link to={"/"} style={{ height: "70px" }}>
          <QuizIcon width={70} height={70} />
        </Link>
      </Header>
      <Content style={contentStyle}>
        <Row justify="center">
          <Col span={24} lg={{ span: 16 }}>
            <Outlet />
          </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}>
        <Row justify="center">
          <Col span={24} lg={{ span: 16 }}>
            <Row justify={"center"} gutter={20}>
              <Col>
                <GithubOutlined style={{ fontSize: "30px" }} />
              </Col>
              <Col>
                <TwitterOutlined style={{ fontSize: "30px" }} />
              </Col>
              <Col>
                <WechatWorkOutlined style={{ fontSize: "30px" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
