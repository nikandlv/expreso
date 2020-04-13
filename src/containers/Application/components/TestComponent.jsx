import { connect } from "react-redux";

const TestComponent = props => {
  return <div></div>;
};

const props = state => ({
  Application: state.Application
});

export default connect(props)(TestComponent);
