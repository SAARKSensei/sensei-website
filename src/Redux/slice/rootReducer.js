"use client";

import { combineReducers } from "@reduxjs/toolkit";
import parentReducer from "./parentSlice";
import childrenReducer from "./childrenSlice";
import currentuserslice from "./currentuserslice";
import currentChildSlice from "./currentChildSlice";

const rootReducer = combineReducers({
  parents: parentReducer,
  children: childrenReducer,
  currentUser: currentuserslice,
  currentChild: currentChildSlice,
});

export default rootReducer;
