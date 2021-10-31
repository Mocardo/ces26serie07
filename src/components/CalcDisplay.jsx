import React from "react"
import { useSelector } from "react-redux"
import styles from "../styles/styles"
import { View, Text } from "react-native"

export default function CalcDisplay() {
  let exprStr = useSelector(state => state.exprStr)
  
  if(exprStr === "") {
    exprStr = "0"
  }
  
  return <View style={styles.calcDisplay}>
    <Text style={styles.calcDisplayText}>
      {exprStr}
    </Text>
  </View>
}