import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {Image} from 'react-native-svg';
import {DropDown} from '../assets/images';
// import PhoneInput from 'react-native-phone-input';
type Props = {};

const PhNumberDemo = (props: Props) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  //const [phone, setPhone] = useState('');
  console.log();
  return (
    <View>
      <Text>helo</Text>
      {/* <PhoneInput
        ref={(ref: any) => setPhone(ref)}
        // onPressFlag={}
        countriesList
        initialCountry={'us'}
        initialValue="13178675309"
        textProps={{
          placeholder: 'Enter a phone number...',
        }}
        
      /> */}
      <PhoneInput
        // disableArrowIcon
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="second"
        onChangeText={text => {
          setValue(text);
        }}
        renderDropdownImage={
          // <View style={{height: 5, width: 5, backgroundColor: 'red'}}></View>
          <DropDown></DropDown>
        }
        // containerStyle={{borderRadius: 20}}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        // withDarkTheme
        // withShadow
        //autoFocus
      />
    </View>
  );
};

export default PhNumberDemo;

const styles = StyleSheet.create({});
