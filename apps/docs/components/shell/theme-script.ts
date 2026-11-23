// SPDX-License-Identifier: Apache-2.0
export const THEME_KEY = 'interlink-color-mode';

/** Inline script for <head>: applies the saved theme before first paint. Light unless the reader chose otherwise. */
export const themeScript = `try{var m=localStorage.getItem('${THEME_KEY}')||'light';if(m==='light'||m==='dark')document.documentElement.setAttribute('data-color-mode',m)}catch(e){document.documentElement.setAttribute('data-color-mode','light')}`;
