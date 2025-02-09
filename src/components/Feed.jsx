import React from "react";
import BASE_URL from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const feed = useSelector((store) => {
    store.feed;
  });
  dispatch = useDispatch();

  if (feed) return;
  try {
    const getFeed = async () => {
      const res = await axios.get(BASE_URL + "/fedd", { withCredentials: true });
    };
    dispatch(addFeed(res.data));
  } catch (err) {
    console.log(err.message);
  }
  
 useEffect(() =>{
    getFeed();
 },[]);

  return <div></div>;
};

export default Feed;
