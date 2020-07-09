import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const Somos = () => {
	return (
		<View style={style.somos}>
			<View style={style.somosIconos}>
				<Image style={style.presentacion} source={require('../images/icono.png')} />
				<Image style={style.presentacion} source={require('../images/grupo.png')} />
			</View>
			<View style={style.subContainerSomos}>
				<Text style={style.somosText}>
					Creada el 23 de Setiembre del 2008 - Perú, por el Coach. Gustavo Vásquez y un equipo conformado por
					los mejores profesionales en Marketing, Psicología, Diseño, Fotografía y Sociología, quienes
					diseñaron un programa de desarrollo empresarial de manera efectiva, para hacer que cada empresa use
					sus propias herramientas para alcanzar éxito en el mercado comercial. Utilizando como pieza clave la
					investigación de la Neurociencia, el Neuromarketing, Marketing ATL, BTL y el Coach Oncológico. Ok
					Perú viene a convertirse en el DEPARTAMENTO DE MARKETING VIRTUAL que tu empresa necesita, no dejes
					pasar la oportunidad de llegar a otro nivel con tu empresa e imagen corporativa
				</Text>
			</View>
		</View>
	);
};
const style = StyleSheet.create({
	somos: {
		flexDirection: 'row',
		paddingHorizontal: '4%',
		paddingTop: '10%',
		justifyContent: 'space-around',
	},
	presentacion: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	somosIconos: {
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	subContainerSomos: {
		flex: 1,
		justifyContent: 'center',
	},
	somosText: {
		fontSize: RFPercentage(1.5),
		textAlign: 'justify',
	},
});
export default Somos;
