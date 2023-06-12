import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {navigation: any; arrname: any; route: any};

const ListDisplay = (props: Props) => {
  // console.log('propssse===>', props);
  // console.log('propssses123===>', props.route.params.arrname);
  let names = props.route.params.arrname;
  //  console.log('nameessssss', names);
  //   console.log('propsssesNAME===>', props.route.params.arrname.checked);
  return (
    <View>
      {names.map((item: any, index: number) => {
        // {
        //   console.log('itemmmm', item.namevalue);
        // }
        return (
          <View style={styles.Viewstyle}>
            <Text style={styles.textstyle}>{item.namevalue}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ListDisplay;

const styles = StyleSheet.create({
  Viewstyle: {
    marginTop: 10,
    marginLeft: 10,
  },
  textstyle: {
    fontSize: 20,
    color: 'green',
  },
});
