import React from "react";

function PostDetail() {
  return (
    <div className="postDetail">
      <label className="title">제목 : 임시 제목</label>
      <span className="date">작성일 : 2022-09-30 17:54(임시 날짜)</span>
      <span className="writer">작성자 : 임시 사용자</span>
      <hr />
      <div className="content">
        <p>임시 내용</p>
      </div>
    </div>
  );
}

export default PostDetail;
