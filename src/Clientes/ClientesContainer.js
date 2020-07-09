import React, { Component, useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Image,
	TextInput,
	ScrollView,
	BackHandler,
	Alert,
} from 'react-native';

import { backgroundColor } from '../temas/tema1';

import * as actions from '../actions';
import { connect } from 'react-redux';

import API_CLIENTE from '../utils/api_cliente';
import API_DIRECCION from '../utils/api_direccion';

import Categorias from '../generales/Categorias';
import ClientesPendientes from './ClientesPendientes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Botones from '../generales/elementos/Botones';
import ContenedorGeneral from '../generales/ContenedorGeneral';

function ClientesContainer(props) {
	const [cliente, setcliente] = useState({
		nombre_empresas: '',
		direccion_empresas: '',
		celular_empresas: '',
		latitud_empresas: '',
		longitud_empresas: '',
		ruc_empresas: '',
		categoria_empresas: 'Categoria',
	});

	const [ubicaciónActual, setubicaciónActual] = useState({
		latitude: -9.926151899999999,
		longitude: -76.2437381,
	});

	const [showCategorias, setshowCategorias] = useState(false);
	const [showClientesPendientes, setshowClientesPendientes] = useState(false);
	const [showLogin, setshowLogin] = useState(false);
	const [load, setload] = useState(false);
	const [contraseña, setcontraseña] = useState('');

	useEffect(() => {
		getGps();
	}, []);

	const getGps = async () => {
		setInterval(async () => {
			let ubicaciónActual = await API_DIRECCION.obtenerUbicacion();

			setubicaciónActual(ubicaciónActual);
		}, 5000);
	};

	const verificarUsuario = () => {
		if (contraseña === 'gv2791') {
			setshowLogin(false);
			setshowClientesPendientes(true);
		}
	};

	const registrarCliente = async () => {
		//this.show('showLoadingSimple', true);
		setload(true);
		if (
			!(
				cliente.nombre_empresas === '' ||
				cliente.direccion_empresas === '' ||
				cliente.ruc_empresas === '' ||
				cliente.celular_empresas === ''
			)
		) {
			//console.log('registrar Cliente', this.state.cliente);
			let clienteServidor = await API_CLIENTE.buscar_empresas('ruc_empresas', cliente.ruc_empresas);

			if (clienteServidor.length > 0) {
				alert('DNI/RUC ya registrado');
				setload(false);
			} else {
				await API_CLIENTE.guardar_empresas(cliente).then(() => {
					setload(false);
				});
				limpiarContenedor();
				alert('Gracias, cliente registrado');
			}
		} else {
			alert('Llenar todos los campos');
			setload(false);
		}
	};

	const limpiarContenedor = () => {
		setcliente({
			nombre_empresas: '',
			direccion_empresas: '',
			celular_empresas: '',
			latitud_empresas: '',
			longitud_empresas: '',
			ruc_empresas: '',
			categoria_empresas: 'Categoria',
		});
	};

	return (
		<View style={style.container}>
			<View style={style.header}>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={style.headerTextPregunta}>¿Quieres aparecer en nuestro directorio?</Text>
					<Text style={style.headerText}>Regístrate</Text>
				</View>
			</View>

			<ScrollView style={{ width: '100%', flex: 1 }}>
				<View style={style.cuerpo}>
					<TouchableWithoutFeedback
						onPress={() => {
							setshowCategorias(true);
						}}
					>
						<View style={style.input}>
							<View style={{ width: 35, height: 35 }} />
							<Text>{cliente.categoria_empresas}</Text>
							<Image style={{ width: 35, height: 35 }} source={require('../images/desplegable.png')} />
						</View>
					</TouchableWithoutFeedback>
					<TextInput
						onChangeText={(text) => {
							setcliente({ ...cliente, nombre_empresas: text });
						}}
						placeholder={'Nombre'}
						value={cliente.nombre_empresas}
						style={style.input1}
					></TextInput>
					<TextInput
						onChangeText={(text) => {
							setcliente({ ...cliente, ruc_empresas: text });
						}}
						placeholder={'DNI/RUC'}
						keyboardType={'numeric'}
						value={cliente.ruc_empresas}
						style={style.input1}
					></TextInput>
					<TextInput
						onChangeText={(text) => {
							setcliente({ ...cliente, direccion_empresas: text });
						}}
						placeholder={'Direccion'}
						value={cliente.direccion_empresas}
						style={style.input1}
					></TextInput>
					<TextInput
						onChangeText={(text) => {
							setcliente({ ...cliente, celular_empresas: text });
						}}
						placeholder={'Celular'}
						value={cliente.celular_empresas}
						style={style.input1}
						keyboardType={'phone-pad'}
					></TextInput>

					<Botones registrarCliente={registrarCliente} load={load} />

					<TouchableWithoutFeedback onPress={() => setshowLogin(true)}>
						<View style={[style.Administrador, backgroundColor.light]}>
							<Text style={style.AdministradorText}>Soy Administrador</Text>
						</View>
					</TouchableWithoutFeedback>
					<View style={{ height: 300 }}></View>
				</View>
			</ScrollView>
			{showCategorias && (
				<Categorias
					categorias={props.categorias}
					cliente={cliente}
					setcliente={setcliente}
					onShowCategorias={() => {
						setshowCategorias(false);
					}}
				/>
			)}
			{showClientesPendientes && (
				<ClientesPendientes
					onShowCategorias={() => {
						setshowClientesPendientes(false);
					}}
				/>
			)}
			<Login
				showLogin={showLogin}
				setshowLogin={setshowLogin}
				setcontraseña={setcontraseña}
				verificarUsuario={verificarUsuario}
			/>
		</View>
	);
}

const Login = (props) => {
	if (!props.showLogin) {
		return <View></View>;
	}
	return (
		<ContenedorGeneral
			cerrar={() => props.setshowLogin(false)}
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(52,52,52,1)',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<View style={styleLogin.subContainer}>
				<View style={styleLogin.cabecera}>
					<Text style={styleLogin.titulo}>Iniciar Sesión</Text>
					<TouchableWithoutFeedback onPress={() => props.setshowLogin(false)}>
						<View style={styleLogin.cerrarContainer}>
							<Text style={styleLogin.cerrarText}>X</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<TextInput
					onChangeText={(text) => {
						props.setcontraseña(text);
					}}
					placeholder={'Contraseña'}
					style={styleLogin.dni}
					secureTextEntry={true}
				></TextInput>
				<TouchableWithoutFeedback onPress={props.verificarUsuario}>
					<View style={styleLogin.confirmar}>
						<Text style={styleLogin.confirmarText}>Confirmar</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</ContenedorGeneral>
	);
};

const styleLogin = StyleSheet.create({
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(52,52,52,1)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	subContainer: {
		width: 250,
		height: 200,
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cabecera: {
		width: '100%',
		height: 80,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	titulo: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	dni: {
		width: '90%',
		height: 35,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderRadius: 5,
		alignItems: 'center',
		paddingHorizontal: 10,
		borderColor: 'rgba(52,207,235,0.4)',
	},

	confirmar: {
		width: '80%',
		height: 40,
		borderRadius: 5,
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	confirmarText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15,
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
});
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

const mapStateToProps = (state) => {
	return {
		categorias: state.categorias,
		clientes: state.clientes,
	};
};
export default connect(mapStateToProps, actions)(ClientesContainer);
