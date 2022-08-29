import {
  SET_LAYOUT_SETTINGS,
  SET_DEFAULT_LAYOUT_SETTINGS,
  SET_ARABIC_ON_LAYOUT,
} from "../actions/LayoutActions";
import { GullLayoutSettings } from "../../GullLayout/settings";

const initialState = {
  settings: {
    ...GullLayoutSettings,
  },
  defaultSettings: {
    ...GullLayoutSettings,
  },
  langauge: {
    ...GullLayoutSettings,
  },
};

const LayoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYOUT_SETTINGS:
      return {
        ...state,
        settings: { ...action.data },
      };
    case SET_DEFAULT_LAYOUT_SETTINGS:
      return {
        ...state,
        defaultSettings: { ...action.data },
      };
    case SET_ARABIC_ON_LAYOUT:
      return {
        ...state,
        langauge: { ...action.data },
      };
    default:
      return { ...state };
  }
};

export default LayoutReducer;
