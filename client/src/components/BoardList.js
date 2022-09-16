import React, { Component } from "react";
import "./BoardList.css";
import axios from "axios";
import Post from "./Post";
import PostAdd from "./PostAdd";
import PostDetail from "./PostDetail";
import PopupDom from "./PopupDom";

class BoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenPopup: false,
    };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  componentDidMount() {
    axios.get("/post_item").then((res) => {
      this.setState({ postList: res.data.rs_value.rows });
    });
  }

  openPopup = (e) => {
    this.setState({ isOpenPopup: true });
  };

  closePopup = (e) => {
    this.setState({ isOpenPopup: false });
  };

  openDetail = (e) => {
    this.setState({ isOpenDetail: true });
  };
  closeDetail = (e) => {
    this.setState({ isOpenDetail: false });
  };

  render() {
    return (
      <div className="board">
        <div className="boardList">
          <p>게시판</p>
          <table className="postTable">
            <thead>
              <tr>
                <th className="postNum">번호</th>
                <th className="postTitle">게시글명</th>
                <th className="postDate">등록일</th>
              </tr>
            </thead>
            <tbody>
              <Post />
            </tbody>
          </table>
          <div>
            <div className="btnLine">
              <button
                type="button"
                className="addBtn"
                onClick={() => {
                  this.openPopup();
                }}
              >
                새 글 작성
              </button>
            </div>
            <div id="popupDom">
              {this.state.isOpenPopup && (
                <PopupDom>
                  <PostAdd onClose={this.closePopup} />
                </PopupDom>
              )}
              {this.state.isOpenDetail && (
                <PopupDom>
                  <PostDetail
                    rbcode={this.state.select_rbcode}
                    onClose={this.closeDetail}
                  />
                </PopupDom>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardList;
