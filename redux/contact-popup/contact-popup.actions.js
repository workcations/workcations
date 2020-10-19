import { ContactPopupActionTypes } from "./contact-popup.action-types";

export const toggleContactPopupHidden = () => ({
  type: ContactPopupActionTypes.TOGGLE_POPUP_HIDDEN,
});

export const toggleContactPopupPosition = (position) => ({
  type: ContactPopupActionTypes.TOGGLE_POPUP_POSITION,
  payload: position,
});
