import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from '../component/HeaderComponent';

type Props = {
  value: string;
  navigation: any;
};

const MyTaskRedioButton = (props: Props) => {
  let [radio, setRadio] = useState(false);
  let [radio1, setRadio1] = useState(false);
  let [radio2, setRadio2] = useState(false);
  let [value, setValue] = useState('');

  const data = [{value: 'Apple'}, {value: 'Samsung'}, {value: 'Blackberry'}];

  const selectRadio = () => {
    setRadio(!radio);
    setRadio1((radio1 = false));
    setRadio2((radio2 = false));
    let value1 = 'Apple';
    setValue(value1);
  };

  const selectRadio1 = () => {
    setRadio1(!radio1);
    setRadio((radio = false));
    setRadio2((radio2 = false));
    let value1 = 'Samsung';
    setValue(value1);
  };

  const selectRadio2 = () => {
    setRadio2(!radio2);
    setRadio((radio = false));
    setRadio1((radio1 = false));
    let value1 = 'Blackberry';
    setValue(value1);
  };

  return (
    <View>
      <HeaderComponent
        prefixIcon={'back'}
        suffixIcon={'close'}
        title={'Radio button task screen'}
        onPre={() => props.navigation.goBack()}
        onSuf={() => props.navigation.goBack()}
      />
      <Text style={{margin: 10, fontSize: 25}}> selct Radio Button</Text>
      <View style={styles.stylename}>
        <TouchableOpacity onPress={() => selectRadio()}>
          <View style={styles.RadioButton}>
            <View
              style={
                radio == true ? styles.selctRadio : styles.unselctRadio
              }></View>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Apple</Text>
      </View>

      <View style={styles.stylename}>
        <TouchableOpacity onPress={() => selectRadio1()}>
          <View style={styles.RadioButton}>
            <View
              style={
                radio1 == true ? styles.selctRadio : styles.unselctRadio
              }></View>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Samsung</Text>
      </View>

      <View style={styles.stylename}>
        <TouchableOpacity onPress={() => selectRadio2()}>
          <View style={styles.RadioButton}>
            <View
              style={
                radio2 == true ? styles.selctRadio : styles.unselctRadio
              }></View>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Blackberry</Text>
      </View>

      <Text style={{margin: 20, fontSize: 25}}>
        Radio Button using Vector Icons
      </Text>

      <View style={styles.stylename}>
        <TouchableOpacity onPress={() => selectRadio()}>
          <Icons
            name={radio == true ? 'radio-button-on' : 'radio-button-off'}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Apple</Text>
      </View>

      <View style={styles.stylename}>
        <TouchableOpacity onPress={() => selectRadio1()}>
          <Icons
            name={radio1 == true ? 'radio-button-on' : 'radio-button-off'}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Samsung</Text>
      </View>

      <View style={styles.stylename}>
        <TouchableOpacity onPress={() => selectRadio2()}>
          <Icons
            name={radio2 == true ? 'radio-button-on' : 'radio-button-off'}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Backberry</Text>
      </View>
      <Text style={styles.text1}>selected value is :{value}</Text>
    </View>
  );
};

export default MyTaskRedioButton;

const styles = StyleSheet.create({
  RadioButton: {
    margin: 20,
    marginLeft: 30,
    // borderWidth: 1,
    borderRadius: 40,
    height: 15,
    width: 15,
    // padding: 1.5,
  },
  selctRadio: {
    borderWidth: 1,
    borderRadius: 30,
    height: 15,
    width: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselctRadio: {
    borderWidth: 1,
    borderRadius: 25,
    height: 15,
    width: 15,
    backgroundColor: 'white',
    padding: 2,
  },
  stylename: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 24,
  },
  text1: {
    fontSize: 24,
    color: 'red',
  },
});
