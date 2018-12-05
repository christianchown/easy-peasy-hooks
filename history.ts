import { createReduxHistory } from "./store/router/router";

import store from "./store/model";

const history = createReduxHistory(store);

export default history;
