import React from 'react';
import {View, Text, Image} from 'react-native';

export default class CardEmployee extends React.Component {
  render() {
    const {img, name, age, job} = this.props;
    return (
      <View
        style={{
          alignSelf: 'center',
          width: '90%',
          padding: 15,
          backgroundColor: '#fff',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={img}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
            }}
          />
        </View>

        <View
          style={{
            marginLeft: 20,
          }}>
          <Text>Name : {name}</Text>
          <Text>Age : {age}</Text>
          <Text>Job Title : {job}</Text>
        </View>
      </View>
    );
  }
}
