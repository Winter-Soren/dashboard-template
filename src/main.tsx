// i18n
import './locales/i18n';

// highlight
import './utils/highlight';

// scroll bar (cdn imported in index.html)
// import "simplebar/src/simplebar.css";

// lightbox
import '../node_modules/react-image-lightbox/style.css';

// map (cdn imported in index.html)
// import "mapbox-gl/dist/mapbox-gl.css";

// editor (cdn imported in index.html)
// import "../node_modules/react-quill/dist/quill.snow.css";

// slick-carousel (cdn imported in index.html)
// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme.css";

// lazy image
import '../node_modules/react-lazy-load-image-component/src/effects/blur.css';
import '../node_modules/react-lazy-load-image-component/src/effects/opacity.css';
import '../node_modules/react-lazy-load-image-component/src/effects/black-and-white.css';

// @ts-ignore
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// @mui
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// redux
import { store, persistor } from './redux/store';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

import { AuthProvider } from './contexts/JWTContext';
// import { AuthProvider } from './contexts/Auth0Context';
// import { AuthProvider } from './contexts/FirebaseContext';
// import { AuthProvider } from './contexts/AwsCognitoContext';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<AuthProvider>
		<HelmetProvider>
			<ReduxProvider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<SettingsProvider>
							<CollapseDrawerProvider>
								<BrowserRouter>
									<App />
								</BrowserRouter>
							</CollapseDrawerProvider>
						</SettingsProvider>
					</LocalizationProvider>
				</PersistGate>
			</ReduxProvider>
		</HelmetProvider>
	</AuthProvider>
	// </React.StrictMode>
);
