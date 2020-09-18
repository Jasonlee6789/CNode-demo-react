import { useDispatch, useSelector } from "react-redux";
import http from "../http";
//
function useTopics() {
  //   let { limit } = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  return (page, tab, limit) => {
    dispatch({
      type: "TOPICS_LOADING",
    });
    http.get(`/topics?page=${page}&tab=${tab}&limit=${limit}`).then((res) => {
      console.log(res);
      dispatch({
        type: "TOPICS_LOAD",
        data: res.data.data,
      });
    });
  };
}

export { useTopics };
