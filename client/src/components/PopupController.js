import { Component } from "react";
import axios from "axios";

class PopupController extends Component {
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
    return;
  }
}

export default PopupController;
