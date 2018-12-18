import React, {Component} from 'react';
import  { Button, Text, Container, Footer, Icon, FooterTab} from 'native-base';
import { StyleSheet } from 'react-native';
import SocialPage from './SocialPage.js'
import HomePage from './HomePage.js'
import SettingsPage from './SettingsPage.js';
import StatsPage from './StatsPage.js';

export default class Routes extends Component {
  constructor(props) {
     super(props)
     this.state = {index: 0,
                   homeActive:true,
                   socialActive:false,
                   statsActive:false,
                   settingsActive:false}; // default screen index
  }

  switchScreen(index) {
     this.setState({index: index});
  }

  render() {
    
    let MainContent = null;
    let homeActive=true, socialActive=false, statsActive=false, settingsActive=false;
    // console.log("test");
    if (this.state.index == 0) {
      MainContent = HomePage;
      homeActive=true, socialActive=false, statsActive=false, settingsActive=false;
    } else if (this.state.index == 1) {
      MainContent = SocialPage;
      homeActive=false, socialActive=true, statsActive=false, settingsActive=false;
    } else if (this.state.index == 2) {
      MainContent = StatsPage;
      homeActive=false, socialActive=false, statsActive=true, settingsActive=false;
    } else if (this.state.index == 3) {
      MainContent = SettingsPage;
      homeActive=false, socialActive=false, statsActive=false, settingsActive=true;
    }

    return (
      <Container>
        <MainContent style={styles.mainContent}/>
        <Footer>
          <FooterTab>
            <Button vertical 
              onPress={() => this.switchScreen(0)}
              active={homeActive}>
              <Icon name="apps" ios='ios-home' android="md-home"/>
              <Text>Home</Text>
            </Button>
            <Button vertical 
              onPress={() => this.switchScreen(1)}
              active={socialActive}>
              <Icon name="user-friends" ios='ios-person' android="md-person" />
              <Text>Social</Text>
            </Button>
            <Button vertical 
              onPress={() => this.switchScreen(2)}
              active={statsActive}>
              <Icon name="navigate" ios='ios-pulse' android="md-menu" />
              <Text>Stats</Text>
            </Button>
            <Button vertical 
              onPress={() => this.switchScreen(3)}
              active={settingsActive}>
              <Icon name="person" ios='ios-settings' android="md-settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  mainContent: {
    height: '100%', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});