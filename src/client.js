/* Configuración svelte y sapper */
import * as sapper from '@sapper/app';

sapper.start({
  target: document.querySelector('app')
});