import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../actions";

const initialState = {
  articles: [],
  errors: {}
};

const useGlobalStore = useGlobalHook(React, initialState, actions);

export default useGlobalStore;
