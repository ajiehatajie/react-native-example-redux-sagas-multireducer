import React, { Component } from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,Button,Text,TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux'
import * as ActionTask from '../Actions'

class HomeScreen extends Component {

  constructor(props){
    super(props)

  }

  componentDidMount(){
   
  }

  render() {

    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    return (
      <View style={styles.container}>
                 <TouchableHighlight style={styles.button} onPress={() => this.props.getTask()}>
              <Text style={styles.buttonText}>Load Data</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

/*
const mapStateToProps = (state) => ({
    Task: state
})
*/
function mapStateToProps (state) {
  return {
    Task: state
  }
}

const mapDispatchToProps = {
  ...ActionTask
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
