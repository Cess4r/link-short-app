import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';



export async function loader({ request }: LoaderArgs) {
	const url = new URL(request.url);
	const errorParam = url.searchParams.get('error');
	const successParam = url.searchParams.get('success');

	const data = {
		error: errorParam,
		success: successParam,
	};

	return json(data);
}

export default function Index() {
	const { error, success } = useLoaderData();

	return (
		<main>
			
			<form method="post" action="/url">
				<div className='titl'>
					<h1>Link-Short</h1>
					<p>Acorta tu URL</p>
				</div>

				<label htmlFor="original" >
					<span className='original'>URL original</span>
					<input
						type="text"
						name="original"
						id="original"
						placeholder="Ejemplo: google.com"
					/>
				</label>
				<label htmlFor="short">
					<span className='corta'>URL acortada</span>
					<input
						type="text"
						name="short"
						id="short"
						placeholder="Ejemplo: gle"
					/>
				</label>
				<div className='down'>
					<button type="submit">Acortar</button>
					<span className="success">
						{success && (
							<p>
								¡Listo! Tu URL acortada es{' '}
								<a href={`/${success}`}>{`${success}`}</a>
							</p>
						)}
					</span>
					<span className="error">
						{error === 'missing' && (
							<p className="error">Por favor, llena todos los campos</p>
						)}
						{error === 'unavailable' && (
							<p className="error">Ese nombre ya está en uso</p>
						)}
					</span>
				</div>
			</form>
		</main>
	);
}