import Slice from "./Slice";
import { createLatestSaga } from "../../ToolKit/createSaga";

const ApplicationSaga = [
  createLatestSaga(Slice.actions.decrement.type, function*() {
    return 5000;
  })
];

export default ApplicationSaga;
