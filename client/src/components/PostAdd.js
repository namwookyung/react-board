import React, { Component } from "react";
import "./PostAdd.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class PostAdd extends Component {
  render() {
    return (
      <div className="postAdd">
        <div className="full_layer">
          <div className="addContent">
            <div>
              <h3>게시글 등록</h3>
            </div>
            <div>
              <CKEditor
                editor={ClassicEditor}
                data="<p>내용을 입력해주세요.</p>"
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
            </div>
            <div className="btnLine">
              <button
                type="submit"
                class="closeBtn"
                onClick={this.props.onClose}
              >
                등록
              </button>
              <button
                type="button"
                className="closeBtn"
                onClick={this.props.onClose}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostAdd;
