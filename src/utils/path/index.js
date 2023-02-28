import {
	HOME_PAGE,
	FAVORITE_PHOTOS,
	TRUSH_PHOTOS,
	ALBUMES_PHOTOS,
	ARCHIVE_PHOTOS,
} from '../image';

export const HOME = {
	name: 'hogar',
	path: '/',
	img: HOME_PAGE,
};

export const LOGIN_USER = {
	name: 'iniciar sesion',
	path: '/iniciarSesion',
};

export const SIGN_USER = {
	name: 'crear cuenta',
	path: '/crearCuenta',
};

export const PHOTOS = {
	name: 'fotos',
	path: '/fotos',
};

export const FAVORITE = {
	name: 'favoritos',
	path: '/favoritos',
	img: FAVORITE_PHOTOS.img,
};

export const ALBUMES = {
	name: 'albumes',
	path: '/albumes',
	img: ALBUMES_PHOTOS.img,
};

export const ARCHIVE = {
	name: 'archivado',
	path: '/archivado',
	img: ARCHIVE_PHOTOS.img,
};

export const TRUSH = {
	name: 'papelera',
	path: '/papelera',
	img: TRUSH_PHOTOS.img,
};

export const NOT_FOUND = {
	name: 'extraviado',
	path: '*',
};

export const LIBRARY = [FAVORITE, ALBUMES, ARCHIVE, TRUSH];
