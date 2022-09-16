import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function etc() {
  const [addContent, setAddContent] = useState({
    postIdx: "",
    postTitle: "",
    postContent: "",
    postDate: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setAddContent({
      ...addContent,
      [name]: value,
    });
    console.log(name, value);
  };

  return (
    <>
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
    </>
  );
}

export default etc;
