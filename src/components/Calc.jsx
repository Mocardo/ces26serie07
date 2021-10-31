import React from "react";
import CalcDisplay from "./CalcDisplay"
import CalcKeyboard from "./CalcKeyboard"
import styles from "../styles/styles"
import { evaluate } from "mathjs"
import { View } from "react-native";

export default function Calc() {
  return <View style={styles.calc}>
    <CalcDisplay/>
    <CalcKeyboard/>
  </View>
}

export function calcEval(exprStr) {
  //console.log(exprStr)
  if(exprStr === "") exprStr = '0';
  let ans = evaluate(exprStr)
  console.log(String(ans))
  return String(ans).substring(0, 9)
}