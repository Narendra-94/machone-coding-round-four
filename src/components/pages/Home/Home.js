import React, { useContext } from "react";
import { Header } from "../../Header";
import "./Home.css";
import { ForumContext } from "../../../context.js/ForumContext";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

export const Home = () => {
  const {
    state: { forumData },
  } = useContext(ForumContext);

  console.log(forumData, "forumData");

  const convertToLocalTime = (timestamp) => {
    const localTime = new Date(timestamp).toLocaleString();
    return localTime;
  };

  return (
    <div className="home">
      <Header headerName="Latest Posts" />

      <div className="home-feed">
        {forumData?.posts?.map((post) => (
          <div className="home-user-feed" key={post.id}>
            <div className="user-feed">
              <div>
                <div>up-vote</div>
              </div>

              <div className="user-feed-details">
                <div className="user-feed-posted-by">
                  <img src={post.picUrl} alt="" />
                  <p className="username">
                    <span className="posted-by-name">Posted by:</span> @
                    {post.username}
                  </p>
                  <p className="time">{convertToLocalTime(post.createdAt)}</p>
                </div>
                <div className="user-feed-post-details">
                  <div>
                    <h2>{post.post}</h2>
                  </div>
                  <div className="feed-tag">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="feed-description">
                    <p>{post.postDescription}</p>
                  </div>
                  <div className="feed-btn">
                    <BiComment />
                    <FiShare2 />
                    <BsBookmark />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
