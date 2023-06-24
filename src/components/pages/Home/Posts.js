import React from "react";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { TbTriangleFilled, TbTriangleInverted } from "react-icons/tb";

export const Posts = ({ post, convertToLocalTime }) => {
  const navigate = useNavigate();

  console.log(post.postId, "single");
  const location = useLocation();

  return (
    <div className="home-user-feed" key={post.id}>
      <div className="user-feed">
        <div style={{ fontSize: "2rem" }}>
          <TbTriangleFilled style={{ color: "#584dc8" }} />
          <div style={{ fontSize: "1.5rem" }}>{post.upvotes}</div>
          <TbTriangleInverted style={{ color: "grey" }} />
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
              <div
                className="comment"
                onClick={() => navigate(`/single-post/${post.postId}`)}
              >
                <BiComment style={{ cursor: "pointer" }} />
              </div>

              <FiShare2 />
              <BsBookmark />
            </div>

            {location.pathname === `/single-post/${post.postId}` ? (
              <div>
                <hr />
                {post.comments.map((comment) => (
                  <div>
                    <div key={comment.id} className="user-feed-posted-by">
                      <img src={comment.picUrl} alt="" />
                      <p className="username">
                        <span className="posted-by-name">Posted by:</span> @
                        {comment.username}
                      </p>

                      <p className="time">
                        {convertToLocalTime(comment.createdAt)}
                      </p>
                    </div>
                    <div>
                      <div>
                        <p style={{ margin: "10px", fontSize: "1.5rem" }}>
                          {comment.comment}
                        </p>
                      </div>
                      <div className="feed-btn">
                        <AiOutlineHeart />
                        <BsBookmark />
                        <BsBookmarkFill />
                        <FiShare2 />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
