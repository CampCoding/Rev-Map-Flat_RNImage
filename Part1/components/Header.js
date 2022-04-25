import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
export class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderHeader() {
    let {imgSrc, title, containerStyle, lableStyle, onPress} = this.props;
    return (
      <View
        style={{
          backgroundColor: '#0096c7',
          height: 50,
          padding: 10,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {imgSrc && (
          <TouchableOpacity
            onPress={() => {
              onPress('yes');
            }}>
            <Image
              source={imgSrc}
              style={{
                width: 40,
                height: 40,
                marginRight: 20,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            ...lableStyle,
          }}>
          {title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {this.renderHeader()}
      </View>
    );
  }
}
