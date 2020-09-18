import React from "react";
import { Layout, Row, Col } from "antd";
import { navs } from "../router/router_list";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Container>
        <Row>
          <Col span={4}>
            <h1 id="logo">
              <Link to="/">JING-CNode</Link>
            </h1>
          </Col>
          <Col span={20}>
            <Nav
              nav={navs}
              getSelected={(location) => {
                const { pathname } = location;
                return nav.findIndex((item) => {
                  return item.to === pathname;
                });
              }}
              theme="dark"
            />
          </Col>
        </Row>
      </Container>
    </Layout.Header>
  );
}

export default Header;
