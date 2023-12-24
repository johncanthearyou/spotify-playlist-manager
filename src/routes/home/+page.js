import getTopSongs from './getTopSongs';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		topSongs: await getTopSongs()
	};
}