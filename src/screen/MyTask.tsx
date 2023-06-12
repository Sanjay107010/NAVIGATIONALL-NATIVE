import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  navigation: any;
};

const MyTask = (props: Props) => {
  //const {navigation, route} = props;
  const [data, setData] = useState([]);
  const [name, setnamevalue] = useState('');
  const [selectData, setselectData] = useState([]);
  const [checkedList, setChekedList] = useState([]);

  const remove = (index: number, item: any) => {
    let rData = [...data];
    let newData = rData.filter((item, id) => index != id);
    setData(newData);
  };
  const addItem = () => {
    let newArr = [...data, {namevalue: name, checked: false}];
    setData(newArr);
    //console.log('data added', newArr);
    // if (name) setData([...data, {namevalue: name, checked: false}]);
    // console.log('data added', data);
    clearinput();
  };
  const clearinput = () => {
    setnamevalue('');
  };
  const checkClick = (index: number, item: any) => {
    let checkData = [...data];
    checkData[index].checked = !checkData[index].checked;
    //console.log('sesesesesses0', checkData),
    setData(checkData);
    let checkList = data.filter((item, index) => item.checked);
    //console.log('first', item.checked);
    setChekedList(checkList);
    // console.log('hello', checkedList);

    // if (checkData[index].checked == true) {
    //   setChekedList(checkData[index].namevalue);
    //   // console.log('$$$$$$$', checkedList);
    //   setselectData({...selectData, checkedList});
    //   console.log('aaaaaaa', selectData);
    // }
  };
  return (
    <View>
      <View style={styles.viewset}>
        <TextInput
          style={styles.textinput}
          defaultValue="name"
          onChangeText={text => setnamevalue(text)}
          value={name}
        />
        <View style={styles.addalign}>
          <TouchableOpacity onPress={() => addItem()}>
            <Entypo name="add-to-list" size={35} color={'red'}></Entypo>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.flatelist}>
            <CheckBox
              //disabled={false}
              onValueChange={() => checkClick(index, item)}
              value={item.checked}
            />

            <Text style={{alignItems: 'center', marginLeft: 10}}>
              {item.namevalue}
            </Text>
            <TouchableOpacity onPress={() => remove(index, item)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('List', {arrname: checkedList})
          }>
          <View style={styles.buttonok}>
            <Text style={{color: 'white', fontSize: 20}}>ok </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyTask;

const styles = StyleSheet.create({
  viewset: {
    marginTop: '10%',
    marginLeft: '5%',
    flexDirection: 'row',
    textAlign: 'center',
  },
  textinput: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
  },
  addalign: {
    marginLeft: '5%',
    justifyContent: 'center',
  },
  flatelist: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonok: {
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'green',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
