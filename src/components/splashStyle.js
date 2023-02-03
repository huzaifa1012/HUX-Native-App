import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    height: '200%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#051367',
    backgroundImage: '',
  },
  top: {
    marginTop: 30,
    flex: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
    borderLeftColor: 'white',
    borderLeftWidth: 2,
    // backgroundColor:'green'
  },
  imagC: {
    alignItems: 'center',
  },
  bottom: {
    flex: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toph1: {
    textAlign: 'left',
    color: 'white',
    fontSize: 40,
  },
  topP: {
    letterSpacing: 0.4,
    color: 'white',
    marginTop: 15,
    fontSize: 16,
    marginBottom: 25,
  },
  button: {
    width: 280,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6C00FF',
    // backgroundColor: '#0d77ee',
    backgroundColor: '#6C00FF',
    padding: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  button2: {
    width: 280,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  btnFn: {
    color: 'white',
    fontSize: 20,
  },
  btnFn2: {
    fontSize: 20,
    color: 'white',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});

export {styles};
