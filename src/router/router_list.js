import React from "react";
import IndexPage from "../view/index";
import TopicPage from "../view/topic";
import GetstartPage from "../view/getstart";
import UserPage from "../view/user";
import AboutPage from "../view/about";
import UndefinedPage from "../view/404";

const routes = [
  {
    path: "/",
    exact: true,
    render(props) {
      return <IndexPage {...props} />;
    },
  },
  {
    path: "/topic/:id",
    exact: true,
    render(props) {
      return <TopicPage {...props} />;
    },
  },
  {
    path: "/getstart",
    exact: true,
    render(props) {
      return <GetstartPage {...props} />;
    },
  },
  {
    path: "/user/:loginname",
    exact: true,
    render(props) {
      return <UserPage {...props} />;
    },
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props} />;
    },
  },
  {
    path: "",
    exact: true,
    render(props) {
      return <UndefinedPage {...props} />;
    },
  },
];
export { routes };
