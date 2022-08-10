import { CHANGE_VISION_STATUS } from './actions';

const defaultState = [
  { status: true },
  { status: false },
  { status: false },
  { status: false },
  { status: false },
  { status: false },
  { status: false },
  { status: false },
  { status: false },
  { status: false },
]

export const formBoxReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VISION_STATUS:
      state[action.index + 1].status = action.payload
      return [
        ...state
      ]
    default:
      break
  }

  return state;
}