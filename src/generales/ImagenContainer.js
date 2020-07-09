import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import ContenedorGeneral from './ContenedorGeneral';

const ImagenContainer = (props) => {
	return (
		<ContenedorGeneral style={style.container} cerrar={props.setShow}>
			<View style={style.subContainer}>
				<View style={style.cabeceraContainer}>
					<View style={style.titulo}>
						<Text style={style.cuerpoTitulo}>Nuestros diseños</Text>
					</View>
					<TouchableWithoutFeedback onPress={props.setShow}>
						<View style={style.cerrarContainer}>
							<Text style={style.cerrarText}>X</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<Image style={style.wrapper} source={props.imagenSelect}></Image>
			</View>
		</ContenedorGeneral>
	);
};
const style = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		backgroundColor: 'rgba(52,52,52,0.2)',
	},
	subContainer: {
		width: '95%',
		height: '60%',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: 'rgba(52,52,52,0.1)',
		paddingTop: 10,
	},
	cabeceraContainer: {
		width: '100%',
		height: 40,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingHorizontal: 10,
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

	cuerpoTitulo: {
		fontSize: RFPercentage(3.5),
		fontWeight: 'bold',
	},
	cuerpo: {
		fontSize: RFPercentage(2),
		textAlign: 'justify',
	},
	wrapper: {
		width: '95%',
		height: '95%',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		resizeMode: 'contain',
	},
});
export default ImagenContainer;
