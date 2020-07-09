import React, { Component, useState, useEffect } from 'react';
import {
	View,
	ActivityIndicator,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableWithoutFeedback,
	TextInput,
	ImageBackground,
} from 'react-native';

import * as actions from '../actions';
import { connect } from 'react-redux';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { backgroundColor } from '../temas/tema1';

import Numeros from '../generales/Numeros';

import { requires } from '../context/menu';
import api_cliente from '../utils/api_cliente';

function Principal(props) {
	const [showNumeros, setshowNumeros] = useState(false);
	const [clientes, setclientes] = useState([]);
	const [categorias, setcategorias] = useState(props.categorias);

	const obtenerDatos = async () => {
		let clientes = await api_cliente.todos();

		props.guardar_clientes(clientes);
	};

	useEffect(() => {
		obtenerDatos();
	}, []);

	const onShowNumeros = (categoria) => {
		//console.log("onShowNumeros categoria", categoria);
		let clientes = props.clientes.filter((cliente) => {
			return categoria === cliente.categoria_empresas && cliente.estado_empresas === '1';
		});
		setclientes(clientes);

		setshowNumeros(true);
	};

	const buscar = (valor) => {
		valor = valor.toUpperCase();
		let found = props.categorias.filter((element) => {
			let valorBuscado = new RegExp(valor, 'g');
			let match = element.match(valorBuscado);
			if (match !== null) {
				return match.length > 0;
			}
		}, valor);

		setcategorias(found.length > 0 ? found : props.categorias);
	};

	return (
		<View style={style.subContainer}>
			<View style={style.buscador}>
				<TextInput placeholder={'Buscar'} style={style.buscadorInput} onChangeText={(valor) => buscar(valor)} />
			</View>
			<FlatList
				style={{ width: '100%', paddingHorizontal: '10%', marginTop: 20 }}
				ItemSeparatorComponent={separador}
				data={categorias.length === 0 ? props.categorias : categorias}
				renderItem={(item, key) => renderItem(item, onShowNumeros)}
				ListFooterComponent={footer}
				ListEmptyComponent={emptyItem}
				numColumns={4}
				keyExtractor={(data) => props.categorias.indexOf(data).toString()}
			/>
			<Numeros asociados={clientes} showNumeros={showNumeros} onShowNumeros={() => setshowNumeros(false)} />
		</View>
	);
}

const separador = () => {
	return <View style={{ height: 5 }}></View>;
};

const renderItem = ({ item }, onShowNumeros) => {
	//console.log("buscar", requires);

	let icono = requires[item.replace(/ /g, '')];
	return (
		<TouchableWithoutFeedback onPress={() => onShowNumeros(item)}>
			<View style={style.itemContainer} key={item}>
				<Image style={[style.item, backgroundColor.light]} source={icono}></Image>
				<Text style={style.itemText}>{item}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};
const emptyItem = () => {
	return (
		<View
			style={{
				height: 300,
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ActivityIndicator size="large" color={backgroundColor.dark.backgroundColor} />
			<Text>Cargando</Text>
		</View>
	);
};
const footer = () => {
	return <View style={{ margin: 40 }}></View>;
};

const mapStateToProps = (state) => {
	return {
		clientes: state.clientes,
		categorias: state.categorias,
	};
};

const style = StyleSheet.create({
	subContainer: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	buscador: {
		width: '80%',
		height: 45,
		backgroundColor: 'white',
		borderRadius: 25,
		marginTop: 25,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'rgba(52,52,52,0.01)',
	},
	buscadorInput: {
		width: '90%',
		height: '90%',
	},
	itemContainer: {
		width: '25%',
		alignItems: 'center',
	},
	item: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	itemText: {
		color: 'rgba(52,52,52,0.8)',
		fontSize: RFPercentage(1.5),
		textAlign: 'center',
	},
});

export default connect(mapStateToProps)(Principal);
