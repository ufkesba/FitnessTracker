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
          {/* <Left>
            <Button transparent>
              <Icon ios='ios-menu' android="md-menu" />
            </Button>
          </Left> */}
          <Body>
            <Title>Header</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right> */}
        </Header>
        <Routes/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
});
