import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ProfileScreen from './ProfileScreen';

type Props = {
  navigation: any;
};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <View>
          <Text style={styles.textstylhome}>profile Screen</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Notifications')}>
        <View>
          <Text style={styles.textstylhome}>Notifications Screen</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
        <View>
          <Text style={styles.textstylhome}>Settings Screen</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Mytask')}>
        <View>
          <Text style={styles.textstylhome}>My Task</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('MytaskRedio')}>
        <View>
          <Text style={styles.textstylhome}>My Task redio Button </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('NewScree')}>
        <View>
          <Text style={styles.textstylhome}>new screen </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('PhNumberDemo')}>
        <View>
          <Text style={styles.textstylhome}>PhNumberDemo </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textstylhome: {
    margin: 5,
    padding: 5,
  },
});
