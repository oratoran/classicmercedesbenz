import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		siteTitle: 'Mercedes-Benz Classics Garage'
	}
});

export default app;