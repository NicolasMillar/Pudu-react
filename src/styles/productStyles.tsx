import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  header:{
      height: 69,
      backgroundColor: '#187f64',
      justifyContent: 'center',
      alignItems: 'center',
    },
  title: {
      color: '#187f64',
      fontSize: 20,
      fontWeight: "700",
      justifyContent: 'flex-start',
      marginBottom: 4,
  },
  content: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footer: {
    height:68,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
  },
  logo: {
    width: 134,
    height: 58,
    alignItems: 'center'
  },
  welcome: {
    color: '#f26d3d',
    marginTop: 17,
    fontSize: 28,
    marginBottom: 31,
  },
  rectangle: {
    width: 311,
    height: 99,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#187f64',
    borderRadius: 5,
    marginBottom: 30,
  },
  text: {
    fontSize: 13,
  },
  buttomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto"
  },
  button1: {
    backgroundColor: '#f28e07',
    width: 146,
    height: 94,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F28E07',
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 15,
  },
  button2: {
    backgroundColor: '#025959',
    width: 146,
    height: 94,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#025959',
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 15,

  },
  footerLogo: {
   width: 38,
   height: 38,
   marginTop: 14,
   marginLeft: 49,
   marginBottom: 16,
   marginRight: 80
  },
  footerLogo1: {
   width: 56,
   height: 48,
   marginTop: 9, 
   marginBottom: 11
  },
  footerLogo2:{
   width: 45,
   height: 45,
   marginTop:14,
   marginBottom: 9,
   marginLeft: 84,
   marginRight: 38,
   alignItems: 'center'
  },
  nameAndImageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "auto"
  },
  verticalContainer:{
      flexDirection: 'column',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "auto",
      alignItems: 'flex-start',
  },
  horizontalContainer:{
      display: 'flex',
      flex: 2,
      flexDirection: 'row',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "auto"
  },
  productImage: {
      maxWidth: 85,
      maxHeight: 85,
  },
  informationLabel: {
      fontSize: 16,
      font: 'Helvetica',
      color: '#187f64',
      alignSelf: 'flex-start',
  },
});
