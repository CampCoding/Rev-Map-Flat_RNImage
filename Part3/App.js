import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { images } from "./constants";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visableSnac: false,
      textVal: "",
      fabGroubOpen: { open: false },
      selectedImg: null,
    };
  }

  openGallery() {
    ImagePicker.openPicker({
      freeStyleCropEnabled: true,
      cropping: true,

      includeBase64: true,
    }).then((image) => {
      this.setState({
        selectedImg: image,
      });
    });
  }

  openCamera() {
    ImagePicker.openCamera({
      freeStyleCropEnabled: true,
      cropping: true,
      cropperStatusBarColor: "#0f0ff0",
      cropperActiveWidgetColor: "#ff07f0",
      cropperToolbarColor: "#009605",
    }).then((image) => {
      this.setState({
        selectedImg: image.path,
      });
    });
  }

  render() {
    return (
      <View
        style={{
          padding: 20,
        }}
      >
        <Image
          source={
            this.state.selectedImg
              ? {
                  uri: `data:${this.state.selectedImg.mime};base64,${this.state.selectedImg.data}`,
                }
              : images.github
          }
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => this.openGallery()}
          style={styles.imgBtn}
        >
          <Text>Open Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.openCamera()}
          style={styles.imgBtn}
        >
          <Text>Open Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgBtn: {
    width: "80%",
    backgroundColor: "steelblue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
});
