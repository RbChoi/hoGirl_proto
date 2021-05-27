/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  AppRegistry,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './src/screens/main/MainScreen';

const App: () => React$Node = () => {
  return <MainScreen />;

  /* return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            style={{marginLeft: 10, marginTop: 6, height: 50, width: 50}}
            source={require('./assets/img/menu.png')}
          />
        </TouchableOpacity>
        <View style={{flex: 2}}>
          <View style={{marginTop: 5, backgroundColor: '#e6e5e1'}}>
            <Text
              style={{
                fontSize: 25,
                marginTop: 10,
                marginBottom: 8,
                alignSelf: 'center',
                color: 'black',
              }}>
              우측으로 이동합니다.
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <Image
            style={{marginLeft: 10, marginRight: 5, width: 35, height: 35}}
            source={require('./assets/img/battery.png')}
          />
          <Text
            style={{
              marginTop: 5,
              marginRight: 10,
              fontSize: 20,
              color: 'black',
            }}>
            50%
          </Text>
          <Image
            style={{marginRight: 5, width: 35, height: 35}}
            source={require('./assets/img/altitude.png')}
          />
          <Text
            style={{
              marginTop: 5,
              marginRight: 15,
              fontSize: 20,
              color: 'black',
            }}>
            15M
          </Text>
          <Image
            style={{marginRight: 10, width: 50, height: 40}}
            source={require('./assets/img/speed.png')}
          />
          <Text
            style={{
              marginTop: 5,
              marginRight: 5,
              fontSize: 20,
              color: 'black',
            }}>
            24km/h
          </Text>
        </View>
      </View>
      <View style={{flex: 15, backgroundColor: 'green'}}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/img/droneCamera.png')}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 1000,
                backgroundColor: 'blue',
              }}>
              <Text>STOP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 1000,
                backgroundColor: 'blue',
              }}>
              <Text>Object Tracking</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 100,
                width: 100,
                alignItems: 'flex-end',
                alignContent: 'flex-end',
                alignSelf: 'flex-end',
                justifyContent: 'flex-end',
                backgroundColor: 'white',
              }}>
              <TouchableOpacity>
                <Text>확대 버튼</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );*/
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;
