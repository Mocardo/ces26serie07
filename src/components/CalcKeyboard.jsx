import React from "react"
import CalcButton from "./CalcButton"
import styles from '../styles/styles'
import { View } from "react-native"

export default function CalcKeyboard() {
  return <View style={styles.calcKeyboard}>
    <View style={styles.calcKeyboardRow}>
      <CalcButton role='op'     symbol='('/>
      <CalcButton role='op'     symbol=')'/>
      <CalcButton role='clear'  symbol='C'/>
      <CalcButton role='delete' symbol='CE'/>
    </View>
    <View style={styles.calcKeyboardRow}>
      <CalcButton role='num' symbol='7'/>
      <CalcButton role='num' symbol='8'/>
      <CalcButton role='num' symbol='9'/>
      <CalcButton role='op'  symbol='/'/>
    </View>
    <View style={styles.calcKeyboardRow}>
      <CalcButton role='num' symbol='4'/>
      <CalcButton role='num' symbol='5'/>
      <CalcButton role='num' symbol='6'/>
      <CalcButton role='op'  symbol='*'/>
    </View>
    <View style={styles.calcKeyboardRow}>
      <CalcButton role='num' symbol='1'/>
      <CalcButton role='num' symbol='2'/>
      <CalcButton role='num' symbol='3'/>
      <CalcButton role='op'  symbol='-'/>
    </View>
    <View style={styles.calcKeyboardRow}>
      <CalcButton role='num'  symbol='0'/>
      <CalcButton role='op'   symbol='.'/>
      <CalcButton role='eval' symbol='='/>
      <CalcButton role='op'   symbol='+'/>
    </View>
  </View>
}