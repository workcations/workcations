import { ContactPopupActionTypes } from "./contact-popup.action-types";

const INITIAL_STATE = {
  hidden: true,
  submitted: 0,
  position: false,
};

const contactPopupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactPopupActionTypes.TOGGLE_POPUP_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ContactPopupActionTypes.TOGGLE_POPUP_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    default:
      return state;
  }
};

export default contactPopupReducer;

/* submitted:
   0: initial_state
   1: submitted_successfully
   2: submit_failure
   */
