/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  FlatList
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({ name: 'test.db', createFromLocation: '~sqlexample.db' });

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: ''
    }

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM pessoa', [], (tx, results) => {
        var len = results.rows.length;
        if (len > 0) {
          var arr = [];
          for(var i = 0; i < len; i++){
            arr.push(results.rows.item(i));
          }
          console.log(arr);
          this.setState({ list: arr });
        }
      });
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <Text>{item.nome}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
