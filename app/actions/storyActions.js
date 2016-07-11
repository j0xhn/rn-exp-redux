import {INPUT_CHANGED, INPUTS_CLEARED} from 'storytime/app/constants/ActionTypes'

export function changeInput (newText) {
  return {
    type: INPUT_CHANGED,
    newText
  }
}

export function clearInputs () {
  return {
    type: INPUT_CHANGED,
  }
}
