import { calcEval } from './Calc'

const initState = {
  exprStr: ""
}

export function calcReducer(state = initState, action) {
  let newStr

  switch(action.type) {
    case "calc/numPressed":
    case "calc/opPressed":
      newStr = state.exprStr + action.payload
      break
    case "calc/evalPressed":
      newStr = calcEval(state.exprStr)
      break
    case "calc/deletePressed":
      newStr = state.exprStr.slice(0, state.exprStr.length - 1)
      break
    case "calc/clearPressed":
      newStr = ""
      break
    default:
      return state
  }

  //console.log({...state, exprStr: newStr})
  return {...state, exprStr: newStr}
}

export function numPressed(num) {
  return {type: "calc/numPressed", payload: num}
}

export function opPressed(opChar) {
  return {type: "calc/opPressed", payload: opChar}
}

export function evalPressed() {
  return {type: "calc/evalPressed"}
}

export function deletePressed() {
  return {type: "calc/deletePressed"}
}

export function clearPressed() {
  return {type: "calc/clearPressed"}
}
