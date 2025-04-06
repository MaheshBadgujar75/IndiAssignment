import React from "react";

const CommentThread = () => {
  const comments = [
    {
      id: 1,
      user: "Rodrickjesferhadley",
      time: "2 hr ago",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
      replies: [
        {
          id: 11,
          user: "Rodrickjesferhadley",
          time: "1 hr ago",
          text: "Reply to first comment.",
          replies: [
            {
              id: 111,
              user: "Rodrickjesferhadley",
              time: "30 min ago",
              text: "Nested reply to reply.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      user: "Rodrickjesferhadley",
      time: "1 hr ago",
      text: "Second top-level comment.",
    },
  ];

  const styles = {
    thread: {
      padding: "20px",
      maxWidth: "700px",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
    },
    comment: {
      position: "relative",
      paddingLeft: "50px",
      marginBottom: "20px",
    },
    connector: {
      position: "absolute",
      top: "30px",
      left: "20px",
      width: "20px",
      height: "20px",
      borderLeft: "2px solid #ccc",
      borderBottom: "2px solid #ccc",
      borderRadius: "0 0 0 20px",
    },
    content: {
      background: "#fff",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 0 4px rgba(0,0,0,0.1)",
    },
    user: {
      fontWeight: "bold",
    },
    time: {
      fontSize: "12px",
      color: "#999",
      marginLeft: "5px",
    },
    text: {
      margin: "8px 0",
    },
    actions: {
      fontSize: "14px",
      color: "#007bff",
      cursor: "pointer",
    },
    likes: {
      marginRight: "10px",
    },
    replies: {
      marginLeft: "40px",
      borderLeft: "2px solid #ccc",
      paddingLeft: "20px",
    },
  };

  const Comment = ({ comment }) => (
    <div style={styles.comment}>
      <div style={styles.connector} />
      <div style={styles.content}>
        <div style={styles.user}>
          {comment.user}
          <span style={styles.time}> — {comment.time}</span>
        </div>
        <div style={styles.text}>{comment.text}</div>
        <div style={styles.actions}>
          <span style={styles.likes}>❤️ 12</span> Reply
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div style={styles.replies}>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div style={styles.thread}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentThread;
