import { fromJS } from "immutable";

const initialState = fromJS({
loginContext: [],
});
function globalReducer(state = initialState, action) {
	switch (action.type) {
		case "CLEAR_TOAST_MESSAGE":
			return state.set("message", fromJS({}));
		default:
			return state;
	}
}

export default globalReducer;