import React, {PureComponent} from 'react';
import  { Container, Header, Left, 
          Body, Right, Button, Icon, 
          Title, Text,
          FooterTab, Footer
        } from 'native-base';
import { StyleSheet } from 'react-native';
import Routes from './components/Routes'



export default class App extends PureComponent<{}, State> {
  state: State = {
    language: ""
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' ios='ios-menu' android="md-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        
        <Routes />

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" ios='ios-home' android="md-home"/>
              
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="user-friends" ios='ios-person' android="md-person" />
              <Text>Friends</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" ios='ios-pulse' android="md-menu" />
              <Text>Stats</Text>
            </Button>
            <Button vertical>
              <Icon name="person" ios='ios-settings' android="md-settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
