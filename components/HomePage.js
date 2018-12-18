import React from "react";
import  { Button, Grid, Row, Text,  } from 'native-base';
import { StyleSheet, ProgressViewIOS, Image, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modal";

export default class HomePage extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Grid style={styles.grid}>
        <TouchableWithoutFeedback onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Modal animationType="slide" transparent={true}
            backdropOpacity={1} backgroundColor='rgba(0,0,0,.5)' visible={this.state.modalVisible}>
              <View style={styles.modalContent}>
                <Text>My stats could be here!!!</Text>
                <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    
                    <Text>Click me to hide the "modal"</Text>
                  </TouchableHighlight>
              </View> 
          </Modal>
        </TouchableWithoutFeedback>

        <Row style={{height: "10%", alignItems: "center", justifyContent: "center"}}>
          <Button bordered dark style={styles.profileButton} onPress={() => {this.setModalVisible(true);}}>
            <Text style={styles.title}>
              View Profile
            </Text>
          </Button>
        </Row>
        <Row style={{height: "50%", alignItems: "center", justifyContent: "center"}}>
          <Button transparent style={styles.iconButton}>
            <Image source={require('../assets/IMG_3409.jpg')} style={styles.icon}>
            </Image>
          </Button>
        </Row>    
        <Row style={{height:"5%", alignItems: "center", justifyContent: "center"}}>
          <ProgressViewIOS  style={styles.progress}progress={.7}>
          </ProgressViewIOS>
        </Row>      
        <Row style={{height:"5%", alignItems: "center", justifyContent: "center"}}>
          <Text style={styles.container}>XP NEEDED: {4500}</Text>
        </Row>
        <Row style={{height:"15%", alignItems: "center", justifyContent: "center"}}>
          <Button primary style={styles.workoutButton}>
            <Text style={[styles.title, color= 'white']}>
              Make some gains!
            </Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    grid: {
      backgroundColor: '#d9d9d9',
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    profileButton: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '75%',
      height: '80%',
      paddingTop: 10,
      backgroundColor:'white',
      borderColor: 'white', 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    workoutButton: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '75%',
      height: '80%',
      paddingTop: 10,
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    progress: {
      width: '80%',
      height: '100%',
      backgroundColor: '#00BCD4',
      borderRadius:5,
    },
    iconButton: {
      height: '100%', 
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    icon: {
      height: '80%', 
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    Row: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });