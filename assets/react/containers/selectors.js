export const getContainers = (state) => state.containers;
export const getContainerById = (state, containerId) => state.containers[containerId];
export const canProcessAction = (state, containerId, containerType) => getContainerById(state, containerId).type === containerType;
