import { StyleSheet, Dimensions } from "react-native";
const {height, width} = Dimensions.get('window')

export default StyleSheet.create({

  calc: {
    flex: 1,
  },
  
  calcDisplay: {
    flex: 3,
    justifyContent: "center",
    textAlign: 'right',
    overflow:"auto",
    backgroundColor: 'lightblue',
    flexWrap: 'wrap',
    //padding: 3
  },
  
  calcDisplayText: {
    color: "black",
    fontWeight: 700,
    //lineHeight: 1,
    padding: 0.05*width,
    fontSize: 0.1*height,
  },
  
  calcKeyboard: {
    flex: 7,
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(91, 189, 250)',
    
    // borderTopWidth: 0.009*width,
    // borderColor: "#24506A",
    
    padding: 2.5,
    /* height: 50px; */
  },
  
  calcKeyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //alignItems: 'center',
    flex:1,
  },
  
  calcButtonEmpty: {
    flex: 1,
    margin: 2.5 + 0.015*width,
  },
  
  calcButton: {
    flex: 1,
    margin: 2.5,
    
    borderColor: '#24506A',
    borderStyle: 'solid',
    borderWidth: 0.013*width,
    
    borderRadius: 13,
    
    justifyContent: 'center',
    
    backgroundColor: '#95ccec',
  },
  
  calcButtonText: {
    fontSize: 0.061 * (height*0.6 + width*0.4),
    color: '#24506A',
    fontWeight: '600',
    //includeFontPadding: false,
    lineHeight: 'min-content',
    
    textAlign: 'center',
  },

})