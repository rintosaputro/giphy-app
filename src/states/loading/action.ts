const ActionType = {
  START_LOADING: "START_LOADING",
  END_LOADING: "END_LOADING",
};

const startLoadingCreator = () => ({
  type: ActionType.START_LOADING,
});

const endLoadingCreator = () => ({
  type: ActionType.END_LOADING,
});

export { ActionType, startLoadingCreator, endLoadingCreator };
