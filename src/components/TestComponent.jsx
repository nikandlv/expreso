import { connect } from "react-redux";
import { selectProgress } from "redux-saga-tools";
import ApplicationSlice from "../redux/Containers/Application/Slice";

const TestComponent = props => {
  console.log(props);
  return <div></div>;
};

export default connect(state => ({
  Application: state.Application,
  Progress: selectProgress(state, ApplicationSlice.actions.decrement.type)
}))(TestComponent);
