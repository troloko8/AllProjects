export const CHANGE_VISION_STATUS = 'CHANGE_VISION_STATUS'

export const checkInputsValue = (status, index) => ({
  type: CHANGE_VISION_STATUS,
  payload: status,
  index: index
})

