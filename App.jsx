import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      hitung: 0,
    };
  }
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
              alignItems: 'center',
              padding: 10,
              margin: 10,
            }}>
            <Text
              style={{
                textAlign: 'right',
                color: 'white',
                fontSize: 24,
                padding: 10,
              }}>
              Clear
            </Text>
          </View>
        </View>
        <View style={styles.bgBaris}>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>(</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>)</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>/</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>x</Text>
          </View>
        </View>

        <View style={styles.bgBaris}>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>7</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>8</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>9</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>+</Text>
          </View>
        </View>

        <View style={styles.bgBaris}>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>4</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>5</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>6</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>-</Text>
          </View>
        </View>

        <View style={styles.bgBaris}>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>1</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>2</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>3</Text>
          </View>
          <View style={styles.bgAngka}>
            <Text style={styles.angka}>=</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#22121',
  },
  bgBaris: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  bgAngka: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  angka: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
});
