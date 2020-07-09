import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import ContenedorGeneral from './ContenedorGeneral';

const TextoContainer = (props) => {
	return (
		<ContenedorGeneral style={style.container} cerrar={props.setShow}>
			<View style={style.subContainer}>
				<View style={style.cabeceraContainer}>
					<View style={style.titulo}>
						<Text style={style.cuerpoTitulo}>{props.titulo}</Text>
					</View>
					<TouchableWithoutFeedback onPress={props.setShow}>
						<View style={style.cerrarContainer}>
							<Text style={style.cerrarText}>X</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={style.cuerpoContainer}>
					<Text style={style.cuerpo}>{props.texto}</Text>
				</View>
			</View>
		</ContenedorGeneral>
	);
};
const style = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'absolute',
		backgroundColor: 'rgba(52,52,52,0.2)',
	},
	subContainer: {
		width: '80%',
		height: '50%',
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: 'rgba(52,52,52,0.1)',
		marginTop: '40%',
	},
	cabeceraContainer: {
		width: '100%',
		height: 80,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	titulo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tituloText: {
		fontSize: 17,
		color: 'rgba(52,52,52,0.7)',
		fontWeight: 'bold',
	},
	cerrarContainer: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: 'pink',
	},
	cerrarText: { color: 'pink', fontWeight: 'bold' },
	cuerpoContainer: {
		width: '100%',
		paddingHorizontal: '10%',
		marginTop: '5%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	cuerpoTitulo: {
		fontSize: RFPercentage(3.5),
		fontWeight: 'bold',
	},
	cuerpo: {
		fontSize: RFPercentage(2),
		textAlign: 'justify',
	},
});
export default TextoContainer;
