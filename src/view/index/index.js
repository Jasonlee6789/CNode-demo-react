import React, { Fragment, useEffect } from "react";
import qs from "qs";
import Nav from "../../componrnt/nav";
import { indexNavs } from "../../router/router_list";
import IndexRouter from "../../router";
import IndexList from "./list";

function IndexPage() {
  return (
    <div className="main">
      <Nav
        navs={indexNavs}
        selectedkey={(location) => {
          let { search } = location;
          let { tab = "all" } = qs.parse(search.slice(1));
          let nowTab = tab;
          return indexNavs.findIndex((item) => {
            let { tab } = qs.parse(item.to.slice(2));
            return nowTab === tab;
          });
        }}
      />
      <IndexList />
    </div>
  );
}
export default IndexPage;
