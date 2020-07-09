import React, { Component } from "react";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import * as actions from "./actions";
import { connect } from "react-redux";

class TabBars extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ width: "100%", flex: 1, backgroundColor: "gray" }}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.selected_tab(1);
          }}
        >
          <View
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: this.props.tabId === 1 ? "green" : "orange"
            }}
          >
            <Text style={style.titulo}>Titulo 1</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.selected_tab(2);
          }}
        >
          <View
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: this.props.tabId === 2 ? "green" : "orange"
            }}
          >
            <Text style={style.titulo}>Titulo 2</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return { tabId: state.tabId };
};

const style = StyleSheet.create({
  titulo: {
    fontSize: RFPercentage(2.54)
  }
});

export default connect(mapStateToProps, actions)(TabBars);
