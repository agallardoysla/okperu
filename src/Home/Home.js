import React, { Component, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import * as actions from '../actions';
import { connect } from 'react-redux';

import Cabecera from '../generales/Cabecera';
import Principal from '../Principal/Principal';
import Nosotros from '../Principal/Nosotros';
import Clientes from '../Clientes/ClientesContainer';

import API_CLIENTES from '../utils/api_cliente';

import categorias from '../context/menu';

function Home(props) {
	const obtenerDatos = async () => {
		let clientes = await API_CLIENTES.todos();

		props.guardar_clientes(clientes);
		props.guardar_categorias(categorias);
	};

	const body = () => {
		if (props.bodyId === 'Principal') {
			return <Principal />;
		} else if (props.bodyId === 'Registro') {
			return <Clientes />;
		} else {
			return <Nosotros />;
		}
	};

	useEffect(() => {
		obtenerDatos();
	}, []);

	return <Cabecera>{body()}</Cabecera>;
}

const mapStateToProps = (state) => {
	return {
		bodyId: state.bodyId,
		clientes: state.clientes,
	};
};

const style = StyleSheet.create({
	subContainer: {
		width: '100%',
		alignItems: 'center',
	},
});

export default connect(mapStateToProps, actions)(Home);
