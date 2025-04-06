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
          time: "2 hr ago",
          text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
          replies: [
            {
              id: 111,
              user: "Rodrickjesferhadley",
              time: "2 hr ago",
              text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      user: "Rodrickjesferhadley",
      time: "2 hr ago",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
  ];

  const Comment = ({ comment, level = 0 }) => (
    <div className="relative flex pb-6">
      {/* Line */}
      <div className="flex flex-col items-center mr-4">
        <img
          src="https://via.placeholder.com/40"
          alt="avatar"
          className="rounded-full"
        />
        {comment.replies && comment.replies.length > 0 && (
          <div className="flex-1 w-px bg-gray-300"></div>
        )}
      </div>

      {/* Comment Box */}
      <div className="flex-1">
        <div className="bg-white p-3 rounded-md border">
          <div className="font-semibold">{comment.user}</div>
          <div className="text-xs text-gray-400 mb-2">{comment.time}</div>
          <div className="text-gray-700 text-sm mb-2">{comment.text}</div>
          <div className="flex items-center gap-2 text-blue-500 text-sm cursor-pointer">
            <span>👍 38</span>
            <span>Reply</span>
          </div>
        </div>

        {/* Replies */}
        {comment.replies &&
          comment.replies.map((reply) => (
            <div key={reply.id} className="ml-10 mt-6">
              <Comment comment={reply} level={level + 1} />
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentThread;
