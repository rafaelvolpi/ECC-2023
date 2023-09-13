import domReady from '@roots/sage/client/dom-ready';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import Glide from '@glidejs/glide';

/**
 * Editor entrypoint
 */
domReady(() => {
  unregisterBlockStyle('core/button', 'outline');
  registerBlockStyle('core/button', {
    name: 'outline',
    label: 'Outline',
  });
  registerBlockStyle('core/table', {
    name: 'laranja',
    label: 'Laranja',
  });
  registerBlockStyle('core/table', {
    name: 'verde',
    label: 'Verde',
  });
  registerBlockStyle('core/table', {
    name: 'azul',
    label: 'Azul',
  });
  new Glide('.glide', { autoplay: 3000 }).mount();

  wp.blocks.unregisterBlockStyle('core/button', 'default');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');
  wp.blocks.unregisterBlockStyle('core/button', 'squared');
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
