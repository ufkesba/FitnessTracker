import React from 'react';
import  { Button,Grid, Row, Text,
        } from 'native-base';
import { StyleSheet, ProgressViewIOS, Image } from 'react-native';

export class Routes extends React.Component {
  render() {
    return (
        <Grid style={styles.grid} >
        <Row style={{height: "10%", alignItems: "center", justifyContent: "center"}}>
          <Button style={styles.profNameContainer}>
            <Text style={styles.title}>
              Brent the Beast
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
          <Button style={styles.profNameContainer}>
            <Text style={styles.title}>
              Gain This Grain!
            </Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
    grid: {
      backgroundColor: '#d9d9d9',
      flex: 1,
      height: '100%'
    },
    profNameContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '75%',
      height: '80%',
      paddingTop: 10
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
      justifyContent: 'center'
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
    },
  });
  

export default Routes;