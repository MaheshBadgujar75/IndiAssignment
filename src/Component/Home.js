import React from "react";

const CommentThread = () => {
  return (
    <div className="comment-thread">
      <div className="comment">
        <div className="comment-content">
          <img src="profile-pic.jpg" alt="Mahesh" className="avatar" />
          <div className="comment-box">
            <div className="user-name">Mahesh Patil</div>
            <div className="comment-text">Mujhe yeh project bahut pasand aaya! Bohot sahi kaam kiya hai. 👏</div>
            <div className="comment-actions">
              <span>👍 95</span> <span>Reply</span>
            </div>
          </div>
        </div>

        {/* Replies */}
        <div className="replies">
          <div className="line"></div>

          {/* Reply 1 */}
          <div className="reply">
            <div className="comment-content">
              <img src="profile-pic.jpg" alt="Vishruta" className="avatar" />
              <div className="comment-box">
                <div className="user-name">Vishruta Deshmukh</div>
                <div className="comment-text">Haan Mahesh, main bhi kaafi impressed hoon! 🔥</div>
                <div className="comment-actions">
                  <span>👍 48</span> <span>Reply</span>
                </div>
              </div>
            </div>

            {/* Nested Reply */}
            <div className="replies">
              <div className="line"></div>

              <div className="reply">
                <div className="comment-content">
                  <img src="profile-pic.jpg" alt="Aarti" className="avatar" />
                  <div className="comment-box">
                    <div className="user-name">Aarti Sharma</div>
                    <div className="comment-text">Same yaar! Itna clean design dekhke maza aa gaya. 😍</div>
                    <div className="comment-actions">
                      <span>👍 30</span> <span>Reply</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Another reply directly to Mahesh */}
          <div className="reply">
            <div className="comment-content">
              <img src="profile-pic.jpg" alt="Aarti" className="avatar" />
              <div className="comment-box">
                <div className="user-name">Aarti Sharma</div>
                <div className="comment-text">BTW koi GitHub link hai kya? Check karna tha. 🙌</div>
                <div className="comment-actions">
                  <span>👍 22</span> <span>Reply</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CSS Styling Inside Component */}
      <style>{`
        .comment-thread {
          padding-left: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .comment {
          position: relative;
          margin-bottom: 2rem;
        }

        .comment-content {
          display: flex;
          align-items: flex-start;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          margin-right: 1rem;
          background-color: #eee; /* fallback if image doesn't load */
        }

        .comment-box {
          background: #fff;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          width: fit-content;
        }

        .user-name {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .comment-text {
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }

        .comment-actions {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: #555;
          cursor: pointer;
        }

        .replies {
          margin-left: 3rem;
          position: relative;
        }

        .reply {
          margin-top: 1rem;
        }

        .line {
          position: absolute;
          top: 0;
          left: 1rem;
          width: 2px;
          height: 100%;
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default CommentThread;
