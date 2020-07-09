import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class HeroesList extends Component {
  getHeroes() {
    const { heroes } = this.props;
    console.log(heroes);
    return heroes.map((heroes, key) => {
      return <Text key={key}>{heroes.superhero}</Text>;
    });
  }

  render() {
    return <View>{this.getHeroes()}</View>;
  }
}
const mapStateToProps = state => {
  return { heroes: state.heroes };
};

export default connect(mapStateToProps)(HeroesList);
