import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import logo2 from './components/logo2.png';

function applyFavicon(href: string) {
	try {
		let link: HTMLLinkElement | null = document.querySelector('link[rel="icon"]');
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}
		link.type = 'image/png';
		link.href = href;
	} catch {}
}

applyFavicon(logo2);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
