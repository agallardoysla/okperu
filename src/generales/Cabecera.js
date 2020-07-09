import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';

import * as actions from '../actions';
import { connect } from 'react-redux';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { backgroundColor } from '../temas/tema1';

function Cabecera(props) {
	return (
		<ImageBackground source={require('../images/fondo.png')} style={style.container}>
			<View style={[style.cabContainer]}>
				<TouchableWithoutFeedback
					onPress={() => {
						props.selected_body('Nosotros');
					}}
				>
					<View
						style={[
							style.cabOpcion,
							props.bodyId === 'Nosotros' ? backgroundColor.dark : backgroundColor.light,
						]}
					>
						<Text style={style.cabTexto}>Nosotros</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						props.selected_body('Principal');
					}}
				>
					<View
						style={[
							style.cabOpcion,
							props.bodyId === 'Principal' ? backgroundColor.dark : backgroundColor.light,
						]}
					>
						<Text style={style.cabTexto}>Directorio</Text>
					</View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback
					onPress={() => {
						props.selected_body('Registro');
					}}
				>
					<View
						style={[
							style.cabOpcion,
							props.bodyId === 'Registro' ? backgroundColor.dark : backgroundColor.light,
						]}
					>
						<Text style={style.cabTexto}>Registro</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			{props.children}
		</ImageBackground>
	);
}

const mapStateToProps = (state) => {
	return {
		bodyId: state.bodyId,
	};
};

const style = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	cabContainer: { width: '100%', height: 40, flexDirection: 'row' },
	cabOpcion: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	cabTexto: { color: 'white', fontWeight: 'bold', fontSize: RFPercentage(2.5) },
});

export default connect(mapStateToProps, actions)(Cabecera);
