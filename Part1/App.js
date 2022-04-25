import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
} from "react-native";
import { images, icons } from "./constants";
import CardEmployee from "./components/CardEmployee";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        // {
        //   img: images.fci,
        //   name: 'Aya',
        //   job: 'Desiner',
        //   age: '21',
        // },
        // {
        //   img: images.github,
        //   name: 'Khalid',
        //   job: 'Web Developer',
        //   age: '22',
        // },
        // {
        //   img: images.quran,
        //   name: 'Mohamed',
        //   job: 'Manager',
        //   age: '25',
        // },
        // {
        //   img: images.fci,
        //   name: 'Aya',
        //   job: 'Desiner',
        //   age: '21',
        // },
        // {
        //   img: images.github,
        //   name: 'Khalid',
        //   job: 'Web Developer',
        //   age: '22',
        // },
        // {
        //   img: images.quran,
        //   name: 'Mohamed',
        //   job: 'Manager',
        //   age: '25',
        // },
        // {
        //   img: images.fci,
        //   name: 'Aya',
        //   job: 'Desiner',
        //   age: '21',
        // },
        // {
        //   img: images.github,
        //   name: 'Khalid',
        //   job: 'Web Developer',
        //   age: '22',
        // },
        // {
        //   img: images.quran,
        //   name: 'Mohamed',
        //   job: 'Manager',
        //   age: '25',
        // },
        // {
        //   img: images.fci,
        //   name: 'Aya',
        //   job: 'Desiner',
        //   age: '21',
        // },
        // {
        //   img: images.github,
        //   name: 'Khalid',
        //   job: 'Web Developer',
        //   age: '22',
        // },
        // {
        //   img: images.quran,
        //   name: 'Mohamed',
        //   job: 'Manager',
        //   age: '25',
        // },
      ],

      refreshingList: false,
    };
  }
  _refreshFun() {
    this.setState({
      refreshingList: true,
    });

    setTimeout(() => {
      let newObj = {
        img: images.github,
        name: "Ayman",
        job: "Mobile Developer",
        age: "24",
      };

      this.setState({
        refreshingList: false,
        employees: [newObj, ...this.state.employees],
      });
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: '#ccc',
        }}
      >
        <FlatList
          data={this.state.employees}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
          }}
          refreshControl={
            <RefreshControl
              colors={["#f00", "#0f0"]}
              refreshing={this.state.refreshingList}
              onRefresh={() => {
                this._refreshFun();
              }}
            />
          }
          ListEmptyComponent={
            <View>
              <Text>Empty Data</Text>
            </View>
          }
          renderItem={({ item, index }) => (
            <CardEmployee
              img={item.img}
              name={item.name}
              age={item.age}
              job={item.job}
            />
          )}
          // renderItem={({item, index}) => (
          // <CardEmployee
          //   img={item.img}
          //   name={item.name}
          //   age={item.age}
          //   job={item.job}
          // />
          // )}
        />

        {/* <ScrollView
          refreshControl={
            <RefreshControl
              colors={['#f00', '#0f0']}
              refreshing={this.state.refreshingList}
              onRefresh={() => {
                this._refreshFun();
              }}
            />
          }
          contentContainerStyle={{
            paddingTop: 20,
          }}
          showsVerticalScrollIndicator={false}>
          {this.state.employees.length > 0 ? (
            this.state.employees.map((item, index) => (
              <View
                key={'em-' + index}
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
                    source={item.img}
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
                  <Text>Name : {item.name}</Text>
                  <Text>Age : {item.age}</Text>
                  <Text>Job Title : {item.job}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text>Empty Data</Text>
          )}
        </ScrollView> */}
      </View>
    );
  }
}
