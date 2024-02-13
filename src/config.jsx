// routes
import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API = '';

export const FIREBASE_API = {
	apiKey: 'AIzaSyANfkrdW1AtEzyoaaVsm_cYexDNY40Gi7w',
	authDomain: 'ultimate-dashboard-a95bb.firebaseapp.com',
	projectId: 'ultimate-dashboard-a95bb',
	storageBucket: 'ultimate-dashboard-a95bb.appspot.com',
	messagingSenderId: '42223938809',
	appId: '1:42223938809:web:b083131eced4a8cf048628',
	measurementId: 'G-K3E0K30DJQ'
};

export const COGNITO_API = {
	userPoolId: 'us-east-1_5X6Z5X6Z5',
	clientId: '5q'
};

export const AUTH0_API = {
	clientId: '5q',
	domain: '5q'
};

export const MAPBOX_API = 'pk.eyJ1IjoibWJtcGgiLCJhIjoiY2tya2F0OTJvMGk1YjJwbGZ1bDJ1eGU0dCJ9.fLJp01SsIpdhGmWdBzaSnQ';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
	MOBILE_HEIGHT: 64,
	MAIN_DESKTOP_HEIGHT: 88,
	DASHBOARD_DESKTOP_HEIGHT: 92,
	DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32
};

export const NAVBAR = {
	BASE_WIDTH: 260,
	DASHBOARD_WIDTH: 280,
	DASHBOARD_COLLAPSE_WIDTH: 88,
	//
	DASHBOARD_ITEM_ROOT_HEIGHT: 48,
	DASHBOARD_ITEM_SUB_HEIGHT: 40,
	DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32
};

export const ICON = {
	NAVBAR_ITEM: 22,
	NAVBAR_ITEM_HORIZONTAL: 20
};

// SETTINGS
// Please remove `localStorage` when you set settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
	themeMode: 'light',
	themeDirection: 'ltr',
	themeColorPresets: 'default',
	themeLayout: 'horizontal',
	themeStretch: false
};
