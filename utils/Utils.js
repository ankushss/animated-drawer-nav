import {Dimensions} from 'react-native'

export const Themes ={
    mainColor: '#ffffff',
    secondColor: '#4163cd',
    accentColor: '#ff511a',
    headerColor: '#f8f8f8',
    lineColor: '#e8eaec',
    gray:"#6a84d9",
    gray2: '#b6bcc8',
    tabColor: '#fefcff',
    inputColor: '#f3f4f8',
    inputBorderRadius: 10,
    inputHeight: 60,
    containerPadding: 15,
    black:'#000000',
    drawerColor: '#1e2746',
    drawerImageSize: 60,
    drawerAccentColor: '#0eabc7'
    
}

export const validationRegex ={
    alphabet: /^[a-zA-Z]+$/
}

export const screenWidth = Dimensions.get('screen').width;
export const screenHeigth = Dimensions.get('screen').heigth;

export const noOfOTPBoxes =6;