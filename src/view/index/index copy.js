import React, { useEffect } from "react";
import style from "./index.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useTopics } from "../../store/action";
import { useLocation } from "react-router-dom";
import qs from "qs";

function IndexPage() {
  const { data, loading, limit } = useSelector((state) => state.topics);
  const { search } = useLocation();
  const { page, tab } = qs.parse(search.slice(1));
  const getData = useTopics();

  useEffect(() => {
    getData(page, tab, limit);
  }, [page, tab]);

  return (
    <div>
      {/* <h1 className={style.title + "title"}>首页视图</h1>
      <Button type="primary">按钮</Button> */}
      {loading ? "数据请求中" : "展示数据"}
    </div>
  );
}
export default IndexPage;
