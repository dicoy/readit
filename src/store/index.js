import React from "react";
import globalHook from 'use-global-hook';
import * as actions from "../actions";

const initialState = {
  articles: [],
  dismissed: [],
  errors: {},
  viewed: [],
  viewing: '',
  loading: true
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
