export const INPUT_TEXT = '@common/INPUT_TEXT'

const initialState = {
  inputText: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        inputText: action.payload
      }
    }
    default:
      return state
  }
}

export function setInputValue(value) {
  return {
    type: INPUT_TEXT,
    payload: value
  }
}
