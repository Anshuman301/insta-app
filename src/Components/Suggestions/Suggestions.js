import React from "react";
import User from "../User/User";
import "./suggestions.css";
import { connect } from "react-redux";
import { fetchSuggestionsAsync } from "../../redux/action/fetchSuggestions.action";
class Suggestions extends React.Component {
  state = {
    suggestions: null
  };

  async componentDidMount() {
    this.props.fetchSuggestions();
  }
  render() {
    const { suggestions } = this.props;
    return (
      <div className="suggestions-div">
        <h5 style={{ color: "silver" }}>Suggestions For You</h5>
        {suggestions.map(({ ...sug }) => (
          <User key={sug.id} {...sug} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = ({ suggestions: { data } }) => ({
  suggestions: data
});
const mapDispatchToProps = dispatch => ({
  fetchSuggestions: () => dispatch(fetchSuggestionsAsync())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestions);
