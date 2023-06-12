import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderComponent from '../component/HeaderComponent';
//import Svg from 'react-native-svg';
import {images} from '../assets/images';
import Svg from '../assets/img/img22.svg';

// import Images, {Logo} from '../assets/images';

type Props = {
  navigation: any;
};

const NewScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{backgroundColor: 'skyblue'}}>
        <View style={{margin: 10, padding: 10}}>
          <HeaderComponent
            prefixIcon={'caretleft'}
            suffixIcon={'close'}
            title={'Home Screen'}
            onPre={() => props.navigation.goBack()}
            onSuf={() => props.navigation.goBack()}
          />
        </View>
        <View>
          <Svg height="50%" width="50%" />
          {/* <SVGImg width={200} height={200} /> */}
          {/* <Imm width={200} height={200} /> */}
          {/* <Logo width={200} height={200} /> */}
          {/* <Svg width={200} height={200} /> */}
          {/* <Image source={Images.Logo} /> */}
          <Image source={images} style={{height: 600, width: 600}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    // height: '100%',
    // width: '100%',
  },
});
