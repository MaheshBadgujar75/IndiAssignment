import React from 'react';

const CommentThread = () => {
  const styles = {
    container: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    },
    tabsContainer: {
      display: 'flex',
      borderBottom: '1px solid #e0e0e0',
      marginBottom: '20px'
    },
    activeTab: {
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '8px',
      marginRight: '24px',
      fontWeight: '500'
    },
    inactiveTab: {
      paddingBottom: '8px',
      marginRight: '24px',
      color: '#6b7280',
      fontWeight: '500'
    },
    commentInput: {
      display: 'flex',
      marginBottom: '24px',
      border: '1px solid #e0e0e0',
      borderRadius: '6px'
    },
    input: {
      flexGrow: 1,
      padding: '12px',
      outline: 'none',
      border: 'none'
    },
    postButton: {
      padding: '0 16px',
      color: '#9ca3af',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    commentThreads: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    threadContainer: {
      position: 'relative',
    },
    commentContainer: {
      display: 'flex',
      marginBottom: '8px'
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#d1d5db',
      overflow: 'hidden',
      marginRight: '12px',
      position: 'relative',
      zIndex: 2
    },
    commentContent: {
      flexGrow: 1
    },
    commentHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '4px'
    },
    username: {
      fontWeight: '500',
      marginRight: '8px'
    },
    timestamp: {
      color: '#6b7280',
      fontSize: '14px'
    },
    commentText: {
      marginBottom: '8px',
      lineHeight: '1.5'
    },
    actionsContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    likeButton: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '8px',
      color: '#6b7280',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    likeIcon: {
      marginRight: '4px'
    },
    replyButton: {
      color: '#3b82f6',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    threadLine: {
      position: 'absolute',
      left: '20px',
      top: '40px',
      width: '1px',
      backgroundColor: '#d1d5db'
    },
    verticalLine: {
      position: 'absolute',
      width: '1px', 
      backgroundColor: '#d1d5db',
      left: '20px'
    },
    replyContainer: {
      marginLeft: '48px',
      display: 'flex',
      marginBottom: '8px',
      position: 'relative'
    },
    moreRepliesContainer: {
      marginLeft: '48px',
      marginBottom: '8px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    moreRepliesLine: {
      position: 'absolute',
      left: '20px',
      height: '24px',
      width: '1px',
      backgroundColor: '#d1d5db',
      top: '0'
    },
    moreRepliesButton: {
      marginLeft: '56px',
      display: 'flex',
      alignItems: 'center',
      color: '#6b7280',
      fontSize: '14px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    plusIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px solid #d1d5db',
      marginRight: '8px'
    },
    horizontalLine: {
      position: 'absolute',
      height: '1px',
      backgroundColor: '#d1d5db',
      top: '20px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Tabs */}
      <div style={styles.tabsContainer}>
        <div style={styles.activeTab}>
          <span>Thoughts(25)</span>
        </div>
        <div style={styles.inactiveTab}>
          <span>Top Holders</span>
        </div>
        <div style={styles.inactiveTab}>
          <span>Activity</span>
        </div>
      </div>

      {/* Comment input */}
      <div style={styles.commentInput}>
        <input 
          type="text" 
          placeholder="Add a comment" 
          style={styles.input}
        />
        <button style={styles.postButton}>Post</button>
      </div>

      {/* Comment threads */}
      <div style={styles.commentThreads}>
        {/* First thread */}
        <div style={styles.threadContainer}>
          <div style={styles.commentContainer}>
            <div style={styles.avatar}>
              <img src="/api/placeholder/40/40" alt="Mahesh avatar" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentHeader}>
                <span style={styles.username}>Mahesh</span>
                <span style={styles.timestamp}>2 hr ago</span>
              </div>
              <p style={styles.commentText}>Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai?</p>
              <div style={styles.actionsContainer}>
                <button style={styles.likeButton}>
                  <span style={styles.likeIcon}>👍</span>
                  <span>38</span>
                </button>
                <button style={styles.replyButton}>Reply</button>
              </div>
            </div>
          </div>

          {/* Thread line for first thread */}
          <div style={{
            position: 'absolute',
            width: '1px', 
            backgroundColor: '#d1d5db',
            left: '20px',
            top: '40px',
            height: '170px',
            zIndex: 1
          }}></div>

          {/* First reply with connecting line */}
          <div style={styles.replyContainer}>
            <div style={{
              position: 'absolute',
              width: '28px', 
              height: '1px',
              backgroundColor: '#d1d5db',
              left: '-28px',
              top: '20px',
              zIndex: 1
            }}></div>
            <div style={styles.avatar}>
              <img src="/api/placeholder/40/40" alt="Vishruta avatar" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentHeader}>
                <span style={styles.username}>Vishruta</span>
                <span style={styles.timestamp}>2 hr ago</span>
              </div>
              <p style={styles.commentText}>Mere paas maa hai, Mahesh Bhai!</p>
              <div style={styles.actionsContainer}>
                <button style={styles.likeButton}>
                  <span style={styles.likeIcon}>👍</span>
                  <span>38</span>
                </button>
                <button style={styles.replyButton}>Reply</button>
              </div>
            </div>
          </div>

          {/* "Show more replies" button with line */}
          <div style={styles.moreRepliesContainer}>
            <div style={{
              position: 'absolute',
              height: '1px',
              width: '28px',
              backgroundColor: '#d1d5db',
              left: '-28px',
              top: '10px',
              zIndex: 1
            }}></div>
            <button style={styles.moreRepliesButton}>
              <span style={styles.plusIcon}>+</span>
              1 more reply
            </button>
          </div>

          {/* Second reply with connecting line */}
          <div style={styles.replyContainer}>
            <div style={{
              position: 'absolute',
              width: '28px', 
              height: '1px',
              backgroundColor: '#d1d5db',
              left: '-28px',
              top: '20px',
              zIndex: 1
            }}></div>
            <div style={styles.avatar}>
              <img src="/api/placeholder/40/40" alt="Aarti avatar" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentHeader}>
                <span style={styles.username}>Aarti</span>
                <span style={styles.timestamp}>2 hr ago</span>
              </div>
              <p style={styles.commentText}>Bade bade deshon mein, aisi choti choti baatein hoti rehti hai, Mahesh.</p>
              <div style={styles.actionsContainer}>
                <button style={styles.likeButton}>
                  <span style={styles.likeIcon}>👍</span>
                  <span>38</span>
                </button>
                <button style={styles.replyButton}>Reply</button>
              </div>
            </div>
          </div>
        </div>

        {/* Second thread */}
        <div style={{...styles.threadContainer, marginTop: '20px'}}>
          <div style={styles.commentContainer}>
            <div style={styles.avatar}>
              <img src="/api/placeholder/40/40" alt="Nishigandha avatar" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentHeader}>
                <span style={styles.username}>Nishigandha</span>
                <span style={styles.timestamp}>2 hr ago</span>
              </div>
              <p style={styles.commentText}>Kabhi kabhi jeetne ke liye kuch haarna padta hai, aur haar kar jeetne waale ko baazigar kehte hain! Khel khel mein, log badal jaate hain, lekin apne sapnon ki building banane se pehle, foundation strong hona chahiye.</p>
              <div style={styles.actionsContainer}>
                <button style={styles.likeButton}>
                  <span style={styles.likeIcon}>👍</span>
                  <span>38</span>
                </button>
                <button style={styles.replyButton}>Reply</button>
              </div>
            </div>
          </div>

          {/* Thread line for second thread */}
          <div style={{
            position: 'absolute',
            width: '1px', 
            backgroundColor: '#d1d5db',
            left: '20px',
            top: '40px',
            height: '100px',
            zIndex: 1
          }}></div>

          {/* Reply with connecting line */}
          <div style={styles.replyContainer}>
            <div style={{
              position: 'absolute',
              width: '28px', 
              height: '1px',
              backgroundColor: '#d1d5db',
              left: '-28px',
              top: '20px',
              zIndex: 1
            }}></div>
            <div style={styles.avatar}>
              <img src="/api/placeholder/40/40" alt="Mahesh avatar" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentHeader}>
                <span style={styles.username}>Mahesh</span>
              </div>
              <p style={styles.commentText}>Don ko pakadna mushkil hi nahin, namumkin hai!</p>
              <div style={styles.actionsContainer}>
                <button style={styles.likeButton}>
                  <span style={styles.likeIcon}>👍</span>
                  <span>38</span>
                </button>
                <button style={styles.replyButton}>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentThread;
