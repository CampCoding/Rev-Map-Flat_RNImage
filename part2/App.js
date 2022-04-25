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
// import {images, icons} from './constants';
import images from "./constants/images";
import { Snackbar, TextInput, FAB, Portal, Provider } from "react-native-paper";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visableSnac: false,
      textVal: "",
      fabGroubOpen: { open: false },
    };
  }

  render() {
    return (
      <Provider>
        <Portal>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text>Main App</Text>
            {/* ---------------------------------------------------Snackbar-------------------------------------------- */}
            {/* <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}
          onPress={() => {
            this.setState({
              visableSnac: true,
            });
          }}
        />

        <Snackbar
          visible={this.state.visableSnac}
          onDismiss={() => {
            this.setState({
              visableSnac: false,
            });
          }}
          action={{
            label: 'Undo',
            onPress: () => {
              this.setState({
                visableSnac: false,
              });
              // Do something
            },
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar> */}

            {/* ---------------------------------------------------TextInput-------------------------------------------- */}
            {/* 
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="Enter Your Email"
          value={this.state.textVal}
          onChangeText={text => {
            this.setState({
              textVal: text,
            });
          }}
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
          theme={{
            roundness: 15,
            colors: {
              primary: '#F00',
              underlineColor: 'transparent',
            },
          }}
        /> */}
            {/* ---------------------------------------------------FAB-------------------------------------------- */}
            {/* <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => console.log('Pressed')}
        /> */}
            {/* ---------------------------------------------------FAB.Groub-------------------------------------------- */}

            <FAB.Group
              open={this.state.fabGroubOpen.open}
              icon={this.state.fabGroubOpen.open ? "calendar-today" : "plus"}
              actions={[
                // {icon: 'plus', onPress: () => console.log('Pressed add')},
                // {
                //   icon: 'star',
                //   label: 'Star',
                //   onPress: () => console.log('Pressed star'),
                // },
                {
                  icon: "email",
                  label: "Email",
                  onPress: () => console.log("Pressed email"),
                },
                {
                  icon: "bell",
                  label: "Remind",
                  onPress: () => console.log("Pressed notifications"),
                  small: false,
                },
              ]}
              onStateChange={(newData) => {
                this.setState({
                  fabGroubOpen: newData,
                });
              }}
              onPress={() => {}}
            />
          </View>
        </Portal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
