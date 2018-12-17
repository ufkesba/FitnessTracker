import React from "react";
import { StyleSheet } from 'react-native';
import {
  Text,
  Grid,
} from "native-base";

export default class SettingsPage extends React.Component {
  render() {
    return (
      <Grid style={styles.grid}>
        <Text>Here I am going to show my settings</Text>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
    grid: {
      backgroundColor: '#d9d9d9',
      flex: 1,
      height: '100%'
    }
  });