import { createSelector } from "reselect";

const selectContactPopup = (state) => state.contactPopup;

export const selectPopupHidden = createSelector(
  [selectContactPopup],
  (contactPopup) => contactPopup.hidden
);

export const selectPopupPosition = createSelector(
  [selectContactPopup],
  (contactPopup) => contactPopup.position
);

export const selectContactFormSubmitted = createSelector(
  [selectContactPopup],
  (contactPopup) => contactPopup.submitted
);
