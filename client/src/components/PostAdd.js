import React, { useState } from "react";
import "./PostAdd.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from "axios";

function PostAdd() {
  const [addContent, setAddContent] = useState({
    postIdx: "",
    postTitle: "",
    postContent: "",
    postDate: "",
  });

  const submitPost = () => {
    Axios.post("/api/insert", {
      postTitle: addContent.postTitle,
      postContent: addContent.postTitle,
    }).then(() => {
      alert("등록 완료");
    });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setAddContent({
      ...addContent,
      [name]: value,
    });
  };

  return (
    <div className="postAdd">
      <div className="full_layer">
        <div className="addContent">
          <div className="content">
            <h3>게시글 등록</h3>
            <input
              type="text"
              className="postInput"
              placeholder="제목"
              onChange={getValue}
              name="postTitle"
            />
            <CKEditor
              editor={ClassicEditor}
              data="<p>내용을 입력해주세요.</p>"
              className="contentEditor"
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
            <button type="submit" className="closeBtn" onClick={submitPost}>
              등록
            </button>
            {/* <button
              type="button"
              className="closeBtn"
              onClick={this.props.onClose}
            >
              닫기
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostAdd;
