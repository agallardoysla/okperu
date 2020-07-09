import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { backgroundColor } from '../temas/tema1';
import { RFPercentage } from 'react-native-responsive-fontsize';

import API_CLIENTES from '../utils/api_cliente';
import ContenedorGeneral from '../generales/ContenedorGeneral';

class ClientesPendientes extends Component {
	state = {
		clientes: [],
	};
	separador = () => {
		return <View style={{ height: 5 }}></View>;
	};
	eliminar = async (item) => {
		await API_CLIENTES.eliminar(item.id);
		await API_CLIENTES.editar_empresas(item);
		this.obtenerDatos().then(() => {
			this.flltrarDatos();
		});
	};
	aceptar = async (item) => {
		item['estado_empresas'] = 1;
		await API_CLIENTES.editar_empresas(item);
		this.obtenerDatos().then(() => {
			this.flltrarDatos();
		});
	};
	obtenerDatos = async () => {
		await this.props.guardar_clientes(clientes);
	};
	flltrarDatos = () => {
		let clientes = this.props.clientes.filter((cliente) => {
			return cliente.estado_empresas === '0';
		});
		this.setState({
			clientes: clientes,
		});
		//console.log("CAtegorias", this.props.clientes);
	};
	componentDidMount = () => {
		this.obtenerDatos().then(() => {
			this.flltrarDatos();
		});
	};

	render() {
		return (
			<ContenedorGeneral cerrar={this.props.onShowCategorias}>
				<View style={style.container}>
					<View style={style.subContainer}>
						<View style={style.cabeceraContainer}>
							<View style={style.titulo}>
								<Text style={style.tituloText}>Confirmar Clientes</Text>
							</View>
							<TouchableWithoutFeedback onPress={this.props.onShowCategorias}>
								<View style={style.cerrarContainer}>
									<Text style={style.cerrarText}>X</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
						<FlatList
							style={{ width: '100%', paddingHorizontal: '10%', marginTop: 20 }}
							ItemSeparatorComponent={this.separador}
							data={this.state.clientes}
							renderItem={this.renderItem}
							ListEmptyComponent={this.emptyItem}
						/>
					</View>
				</View>
			</ContenedorGeneral>
		);
	}
	emptyItem = () => {
		return (
			<View>
				<Text>No hay sugerencias aún</Text>
			</View>
		);
	};
	renderItem = ({ item }) => {
		return (
			<View style={style.itemContainer}>
				<View style={{ flex: 1 }}>
					<Text style={style.itemTitulo}>{item.nombre_empresas}</Text>
					<Text style={style.itemDireccion}>{item.direccion_empresas}</Text>
					<TouchableWithoutFeedback
						onPress={() => {
							call({ number: `+51${item.celular_empresas}` }).catch(console.error);
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginVertical: 2,
							}}
						>
							<Image style={{ width: 20, height: 20 }} source={require('../images/llamar.png')} />
							<Text style={[style.itemNumero]}>{item.celular_empresas}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>

				<View
					style={{
						flexDirection: 'row',
						width: 130,
						justifyContent: 'space-between',
					}}
				>
					<TouchableWithoutFeedback
						onPress={() => {
							Linking.openURL(
								`https://www.google.com/maps/dir/?api=1&destination=${item.latitud_empresas},${item.longitud_empresas}`
							);
						}}
					>
						<Image style={{ width: 40, height: 40 }} source={require('../images/mapa.png')} />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => this.eliminar(item)}>
						<View style={style.eliminar}>
							<Text style={style.eliminarText}>-</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => this.aceptar(item)}>
						<View style={style.aceptar}>
							<Text style={style.aceptarText}>+</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	};
}

const style = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		position: 'absolute',
		backgroundColor: 'rgba(52,52,52,0.2)',
	},
	subContainer: {
		width: '90%',
		height: '85%',
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: 'rgba(52,52,52,0.1)',
		marginTop: '10%',
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
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(52,52,52,0.3)',
	},
	itemTitulo: {
		fontWeight: 'bold',
		fontSize: 15,
	},
	itemDireccion: {
		fontSize: 12,
	},
	itemNumero: {
		fontWeight: 'bold',
		fontSize: 13,
		color: '#85c5ce',
	},
	eliminar: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	eliminarText: {
		fontSize: RFPercentage(8),
		color: 'red',
	},
	aceptar: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	aceptarText: {
		fontSize: RFPercentage(5),
		color: 'green',
	},
});
const mapStateToProps = (state) => {
	return {
		clientes: state.clientes,
	};
};
export default connect(mapStateToProps, actions)(ClientesPendientes);
