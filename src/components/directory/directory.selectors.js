import { createSelector, createSelectorCreator } from "reselect";
import Directory from "./directory.component";

import { createStructuredSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
