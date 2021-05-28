import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onObjectTracking: false,
      info_statement: '우측으로 이동합니다.',
      droneImage: require('../../../assets/img/room.png'),
      userScreenButton: require('../../../assets/img/enlargement.png'),
      enlargeStatus: true,
      stopStatus: false,
      objectStatus: false,
      warnStatus: false,
      infoColor: 'black',
    };
  }
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{marginLeft: 10, marginTop: 6, height: 50, width: 50}}
              source={require('../../../assets/img/menu.png')}
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
                  color: this.state.infoColor,
                }}>
                {this.state.info_statement}
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
              source={require('../../../assets/img/battery.png')}
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
              source={require('../../../assets/img/altitude.png')}
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
              source={require('../../../assets/img/speed.png')}
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
        <View style={{flex: 15}}>
          {this.state.enlargeStatus && (
            <ImageBackground
              style={styles.image}
              source={this.state.droneImage}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                {!this.state.stopStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      marginRight: 40,
                      marginLeft: 40,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      backgroundColor: 'white',
                      opacity: 0.7,
                    }}
                    onPress={() =>
                      this.setState({
                        stopStatus: true,
                        info_statement: '드론이 착륙합니다.',
                      })
                    }>
                    <Text
                      style={{
                        marginTop: 29,
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      STOP
                    </Text>
                  </TouchableOpacity>
                )}
                {this.state.stopStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      marginRight: 40,
                      marginLeft: 40,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      backgroundColor: 'white',
                      opacity: 0.7,
                    }}
                    onPress={() =>
                      this.setState({
                        stopStatus: false,
                        info_statement: '우측으로 이동합니다.',
                      })
                    }>
                    <Text
                      style={{
                        marginTop: 29,
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      STOP
                    </Text>
                  </TouchableOpacity>
                )}
                {!this.state.objectStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      backgroundColor: 'white',
                      opacity: 0.7,
                    }}
                    onPress={() => {
                      this.setState({
                        objectStatus: true,
                        droneImage: require('../../../assets/img/room_object.png'),
                      });
                    }}>
                    <Text
                      style={{
                        marginTop: 29,
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Object Tracking
                    </Text>
                  </TouchableOpacity>
                )}
                {this.state.objectStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      backgroundColor: 'white',
                      opacity: 0.7,
                    }}
                    onPress={() => {
                      this.setState({
                        objectStatus: false,
                        droneImage: require('../../../assets/img/room.png'),
                      });
                    }}>
                    <Text
                      style={{
                        marginTop: 29,
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Object Tracking
                    </Text>
                  </TouchableOpacity>
                )}
                {!this.state.objectStatus && !this.state.warnStatus && (
                  //오브젝트 키기 누를때 warn뜰 때
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      opacity: 0.7,
                    }}
                    onPress={() => {
                      this.setState({
                        warnStatus: true,
                        droneImage: require('../../../assets/img/warn_room.png'),
                        info_statement: '2M 앞 장애물 주의',
                        infoColor: 'red',
                      });
                    }}></TouchableOpacity>
                )}
                {this.state.objectStatus && !this.state.warnStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      opacity: 0.7,
                    }}
                    onPress={() => {
                      this.setState({
                        warnStatus: true,
                        droneImage: require('../../../assets/img/warn_room_object.png'),
                        info_statement: '2M 앞 장애물 주의',
                        infoColor: 'red',
                      });
                    }}></TouchableOpacity>
                )}
                {this.state.objectStatus && this.state.warnStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      opacity: 0.7,
                    }}
                    onPress={() => {
                      this.setState({
                        warnStatus: false,
                        droneImage: require('../../../assets/img/room_object.png'),
                        info_statement: '우측으로 이동합니다.',
                        infoColor: 'black',
                      });
                    }}></TouchableOpacity>
                )}
                {!this.state.objectStatus && this.state.warnStatus && (
                  <TouchableOpacity
                    style={{
                      marginTop: 750,
                      width: 100,
                      height: 100,
                      borderRadius: 1000,
                      opacity: 0.7,
                    }}
                    onPress={() => {
                      this.setState({
                        warnStatus: false,
                        droneImage: require('../../../assets/img/room.png'),
                        info_statement: '우측으로 이동합니다.',
                        infoColor: 'black',
                      });
                    }}></TouchableOpacity>
                )}
                <View
                  style={{
                    marginLeft: 450,
                    height: 300,
                    width: 500,
                    alignItems: 'flex-end',
                    alignContent: 'flex-end',
                    alignSelf: 'flex-end',
                    justifyContent: 'flex-end',
                    backgroundColor: 'white',
                  }}>
                  <ImageBackground
                    style={{marginTop: 20, width: 500, height: 300}}
                    source={require('../../../assets/img/j_user.png')}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({enlargeStatus: false});
                      }}>
                      <Image
                        style={{
                          marginRight: 450,
                          marginBottom: 250,
                          width: 30,
                          height: 30,
                        }}
                        source={require('../../../assets/img/enlargement.png')}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>
            </ImageBackground>
          )}
          {!this.state.enlargeStatus && (
            <View style={{flexDirection: 'row'}}>
              <ImageBackground
                style={{
                  flex: 1,
                  width: 683,
                  height: 950,
                }}
                resizeMode="stretch"
                source={this.state.droneImage}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  {!this.state.stopStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        marginRight: 40,
                        marginLeft: 40,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        backgroundColor: 'white',
                        opacity: 0.7,
                      }}
                      onPress={() =>
                        this.setState({
                          stopStatus: true,
                          info_statement: '드론이 착륙합니다.',
                        })
                      }>
                      <Text
                        style={{
                          marginTop: 29,
                          fontSize: 30,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        STOP
                      </Text>
                    </TouchableOpacity>
                  )}
                  {this.state.stopStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        marginRight: 40,
                        marginLeft: 40,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        backgroundColor: 'white',
                        opacity: 0.7,
                      }}
                      onPress={() =>
                        this.setState({
                          stopStatus: false,
                          info_statement: '우측으로 이동합니다.',
                        })
                      }>
                      <Text
                        style={{
                          marginTop: 29,
                          fontSize: 30,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        STOP
                      </Text>
                    </TouchableOpacity>
                  )}
                  {!this.state.objectStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        backgroundColor: 'white',
                        opacity: 0.7,
                      }}
                      onPress={() => {
                        this.setState({
                          objectStatus: true,
                          droneImage: require('../../../assets/img/room_object.png'),
                        });
                      }}>
                      <Text
                        style={{
                          marginTop: 29,
                          fontSize: 30,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Object Tracking
                      </Text>
                    </TouchableOpacity>
                  )}
                  {this.state.objectStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        backgroundColor: 'white',
                        opacity: 0.7,
                      }}
                      onPress={() => {
                        this.setState({
                          objectStatus: false,
                          droneImage: require('../../../assets/img/room.png'),
                        });
                      }}>
                      <Text
                        style={{
                          marginTop: 29,
                          fontSize: 30,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Object Tracking
                      </Text>
                    </TouchableOpacity>
                  )}
                  {!this.state.objectStatus && !this.state.warnStatus && (
                    //오브젝트 키기 누를때 warn뜰 때
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        opacity: 0.7,
                      }}
                      onPress={() => {
                        this.setState({
                          warnStatus: true,
                          droneImage: require('../../../assets/img/warn_room.png'),
                          info_statement: '2M 앞 장애물 주의',
                          infoColor: 'red',
                        });
                      }}></TouchableOpacity>
                  )}
                  {this.state.objectStatus && !this.state.warnStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        opacity: 0.7,
                      }}
                      onPress={() => {
                        this.setState({
                          warnStatus: true,
                          droneImage: require('../../../assets/img/warn_room_object.png'),
                          info_statement: '2M 앞 장애물 주의',
                          infoColor: 'red',
                        });
                      }}></TouchableOpacity>
                  )}
                  {this.state.objectStatus && this.state.warnStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        opacity: 0.7,
                      }}
                      onPress={() => {
                        this.setState({
                          warnStatus: false,
                          droneImage: require('../../../assets/img/room_object.png'),
                          info_statement: '우측으로 이동합니다.',
                          infoColor: 'black',
                        });
                      }}></TouchableOpacity>
                  )}
                  {!this.state.objectStatus && this.state.warnStatus && (
                    <TouchableOpacity
                      style={{
                        marginTop: 750,
                        width: 100,
                        height: 100,
                        borderRadius: 1000,
                        opacity: 0.7,
                      }}
                      onPress={() => {
                        this.setState({
                          warnStatus: false,
                          droneImage: require('../../../assets/img/room.png'),
                          info_statement: '우측으로 이동합니다.',
                          infoColor: 'black',
                        });
                      }}></TouchableOpacity>
                  )}
                  <View
                    style={{
                      marginLeft: 450,
                      height: 300,
                      width: 500,
                      alignItems: 'flex-end',
                      alignContent: 'flex-end',
                      alignSelf: 'flex-end',
                      justifyContent: 'flex-end',
                      backgroundColor: 'white',
                    }}></View>
                </View>
              </ImageBackground>
              <ImageBackground
                style={{
                  flex: 1,
                  width: 700,
                  height: 950,
                }}
                resizeMode="stretch"
                source={require('../../../assets/img/j_user.png')}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({enlargeStatus: true});
                  }}>
                  <Image
                    style={{
                      marginRight: 450,
                      marginBottom: 250,
                      width: 30,
                      height: 30,
                    }}
                    source={require('../../../assets/img/reduction.png')}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: Dimensions.get('screen').width,
  },
  header: {
    flex: 0.3,
    backgroundColor: 'green',
  },
  content: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    height: 950,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
