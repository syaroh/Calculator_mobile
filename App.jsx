import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      hitung: 0,
    };
  }

  // fungsi operator
  masukkanAngka = value => {
    if (this.state.hitung == 0) {
      this.setState({hitung: value});
    } else {
      this.setState({hitung: this.state.hitung + '' + value});
    }
  };

  // fungsi hasil atau sama dengan
  hitungHasil = () => {
    let hasil = eval(this.state.hitung);
    this.setState({hitung: hasil});
  };

  // fungsi koma atau titik
  titik = () => {
    if (this.state.hitung == 0) {
      this.setState({hitung: 0});
    } else {
      this.setState({hitung: this.state.hitung + '' + '.'});
    }
  };

  render() {
    return (
      <View style={styles.background}>
        <StatusBar backgroundColor="gray" barStyle="light-content" />

        {/* tampilan view bg angka yang diinput */}
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'gray',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              textAlign: 'right',
              color: 'white',
              fontSize: 40,
              marginHorizontal: 10,
            }}>
            {this.state.hitung}
          </Text>
        </View>
        {/* penutup tampilan view bg angka yang diinput */}

        {/* pembuka tampilan view seluruh angka dan operator */}
        <View style={{flex: 1}}>
          {/* pembuka tampilan view 'clear' */}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                justifyContent: 'flex-end',
                flex: 1,
                padding: 10,
                margin: 10,
              }}
              onPress={() => this.setState({hitung: 0})}>
              <Text
                style={{
                  textAlign: 'right',
                  color: 'orange',
                  fontSize: 24,
                  padding: 10,
                }}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          {/* penutup tampilan view 'clear' */}

          <View style={styles.bgBaris}>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(0)}>
              <Text style={styles.angka}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.titik()}>
              <Text style={styles.angka}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka('/')}>
              <Text style={styles.operator}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka('x')}>
              <Text style={styles.operator}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bgBaris}>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(7)}>
              <Text style={styles.angka}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(8)}>
              <Text style={styles.angka}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(9)}>
              <Text style={styles.angka}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka('+')}>
              <Text style={styles.operator}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bgBaris}>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(4)}>
              <Text style={styles.angka}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(5)}>
              <Text style={styles.angka}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(6)}>
              <Text style={styles.angka}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka('-')}>
              <Text style={styles.operator}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bgBaris}>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(1)}>
              <Text style={styles.angka}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(2)}>
              <Text style={styles.angka}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.masukkanAngka(3)}>
              <Text style={styles.angka}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgAngka}
              onPress={() => this.hitungHasil()}>
              <Text style={styles.operator}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* penutup tampilan view seluruh angka dan operator */}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'gray',
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
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  operator: {
    color: 'orange',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
});
