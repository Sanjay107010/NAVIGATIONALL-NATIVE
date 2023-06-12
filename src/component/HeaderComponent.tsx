import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

type Props = {
  prefixIcon: string;
  suffixIcon: string;
  title: string;
  onPre: () => void;
  onSuf: () => void;
};

const HeaderComponent = (props: Props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => props.onPre()}>
        <Icons name={props.prefixIcon} size={30} />
      </TouchableOpacity>
      <Text style={{alignSelf: 'center'}}>{props.title}</Text>
      <TouchableOpacity onPress={() => props.onSuf()}>
        <Icons name={props.suffixIcon} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
