import { Layout } from "antd";
import React from "react";
import IndexRouter from "./router";
import "./static/css/index.css";
import Header from "./component/header";
import Container from "./component/container";

function App() {
  return (
    <Layout className="pageLayout">
      <Header />
      <Container style={{ paddingTop: 74 }}>
        <IndexRouter />
      </Container>
    </Layout>
  );
}

export default App;
