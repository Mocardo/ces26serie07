import React from "react"
import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import {
  numPressed,
  opPressed,
  evalPressed,
  deletePressed,
  clearPressed
} from "./calcReducer"
import styles from "../styles/styles"

export default function CalcButton({role, symbol}) {
  const dispatch = useDispatch()
  let clickHandler
  
  switch(role) {
    case 'num':
      clickHandler = function() {
        // console.log(numPressed(symbol))
        dispatch(numPressed(symbol))
      }; break;
    case 'op':
      clickHandler = function() { 
        dispatch(opPressed(symbol))
      }; break;
    case 'eval':
      clickHandler = function() {
        dispatch(evalPressed())
      }; break;
    case 'delete':
      clickHandler = function() {
        dispatch(deletePressed())
      }; break;
    case 'clear':
      clickHandler = function() {
        dispatch(clearPressed())
      }; break;
    default:
      break;
  }
  
  //console.log(clickHandler)
  //return <button type='button' onClick={clickHandler}>{symbol}</button>
  return <TouchableOpacity style={styles.calcButton} onPress={clickHandler}>
    <Text style={styles.calcButtonText}>
      {symbol}
    </Text>
  </TouchableOpacity>
}