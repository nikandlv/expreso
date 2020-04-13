import Slice from "./Slice";
import { createLatestSaga } from "../../ToolKit/createSaga";

const ApplicationSaga = [
  createLatestSaga(Slice.actions.decrement.type, function*() {
    yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return 5000;
  })
];

export default ApplicationSaga;
