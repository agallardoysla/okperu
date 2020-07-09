const URL = 'https://chaski-snack.herokuapp.com/apis/empresasok.php?funcion=';

class Api {
	async guardar_empresas(datos) {
		const data = new FormData();
		data.append('nombre_empresas', datos.nombre_empresas);
		data.append('direccion_empresas', datos.direccion_empresas);
		data.append('celular_empresas', datos.celular_empresas);
		data.append('latitud_empresas', datos.latitud_empresas);
		data.append('longitud_empresas', datos.longitud_empresas);
		data.append('ruc_empresas', datos.ruc_empresas);
		data.append('estado_empresas', 0);
		data.append('categoria_empresas', datos.categoria_empresas);

		fetch(`${URL}guardar`, {
			method: 'POST',
			body: data,
		})
			.then((r) => r.json())
			.then((data) => console.log('guardar_empresas', data))
			.catch((e) => console.error('guardar_empresas - error', e));
	}
	async editar_empresas(datos) {
		const data = new FormData();
		data.append('id', datos.id);
		data.append('nombre_empresas', datos.nombre_empresas);
		data.append('direccion_empresas', datos.direccion_empresas);
		data.append('celular_empresas', datos.celular_empresas);
		data.append('latitud_empresas', datos.latitud_empresas);
		data.append('longitud_empresas', datos.longitud_empresas);
		data.append('ruc_empresas', datos.ruc_empresas);
		data.append('estado_empresas', datos.estado_empresas);
		data.append('categoria_empresas', datos.categoria_empresas);

		fetch(`${URL}editar`, {
			method: 'POST',
			body: data,
		})
			.then((r) => r.json())
			.then((data) => console.log('guardar_empresas', data))
			.catch((e) => console.error('guardar_empresas - error', e));
	}
	async todos() {
		try {
			const query = await fetch(`${URL}todos`);
			const data = await query.json();
			return data;
		} catch (error) {
			console.log('buscar_empresas', error);
			return [];
		}
	}
	async buscar_empresas(campo, valor) {
		try {
			const query = await fetch(`${URL}buscar&campo=${campo}&valor=${valor}`);
			const data = await query.json();

			return data;
		} catch (error) {
			console.log('buscar_empresas', error);
			return [];
		}
	}
	async eliminar(valor) {
		try {
			const query = await fetch(`${URL}eliminar&id=${valor}`);
			const data = await query.json();
			return data;
		} catch (error) {
			console.log('buscar_empresas', error);
			return [];
		}
	}
}

export default new Api();
