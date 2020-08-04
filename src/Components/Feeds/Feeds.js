import React from "react";
import axios from "axios";
import Feed from "../Feed/Feed";
import "./feeds.css";
import { connect } from "react-redux";
import { fetchFeedsAsync } from "../../redux/action/fetchFeeds.action";
class Feeds extends React.Component {
  componentDidMount() {
    this.props.fetchFeeds();
  }
  render() {
    const { feeds } = this.props;
    return (
      <div className="div-feeds">
        {feeds.map(({ ...f }) => (
          <Feed key={f.id} {...f} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ feeds: { data } }) => ({
  feeds: data
});
const mapDispatchToProps = dispatch => ({
  fetchFeeds: () => dispatch(fetchFeedsAsync())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feeds);
