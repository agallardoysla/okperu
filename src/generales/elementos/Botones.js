import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import { backgroundColor } from '../../temas/tema1';

function Botones({ registrarCliente, load = false }) {
	console.log(load);

	return !load ? (
		<TouchableOpacity onPress={registrarCliente} style={[style.confirmar, backgroundColor.dark]}>
			<Text style={style.confirmarText}>Confirmar</Text>
		</TouchableOpacity>
	) : (
		<TouchableOpacity
			onPress={registrarCliente}
			style={[style.confirmar, { backgroundColor: 'grey', flexDirection: 'row' }]}
		>
			<Text style={style.confirmarText}>Confirmar</Text>
			<ActivityIndicator color={backgroundColor.dark.backgroundColor}></ActivityIndicator>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
	header: {
		width: '100%',
		height: 70,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 20,
		flexDirection: 'row',
	},
	headerTextPregunta: {
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	reporte: {
		width: 35,
		height: 35,
	},
	cuerpo: {
		width: '100%',
		alignItems: 'center',
	},
	input: {
		width: '70%',
		height: 35,
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 50,
		textAlign: 'center',
		borderColor: 'rgba(52,52,52,0.4)',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 5,
		backgroundColor: 'rgba(256,256,256,0.8)',
	},
	input1: {
		width: '70%',
		height: 35,
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 50,
		textAlign: 'center',
		borderColor: 'rgba(52,52,52,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(256,256,256,0.8)',
	},
	input2: {
		width: '50%',
		height: 35,
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 50,
		textAlign: 'center',
		borderColor: 'rgba(52,52,52,0.4)',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	confirmar: {
		width: '80%',
		height: 40,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	confirmarText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15,
	},
	Administrador: {
		width: '60%',
		height: 30,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	AdministradorText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15,
	},
});
export default Botones;
