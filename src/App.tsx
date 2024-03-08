import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
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
  borderRadius: 8,
  overflow: "hidden",
  // width: "calc(50% - 8px)",
  // maxWidth: "calc(50% - 8px)",
};

function App() {
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          {/* <nav>
            <ul>
              <li>
                <Link to={`content`}>Your Name</Link>
              </li>
            </ul>
          </nav> */}
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}></Footer>
      </Layout>
    </div>
  );
}

export default App;
