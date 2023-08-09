import domReady from '@roots/sage/client/dom-ready';
import Glide from '@glidejs/glide';

/**
 * Application entrypoint
 */

domReady(async () => {
  const COMPONENT_NAME = 'data-glide';
  const COMPONENT_SELECTOR = `[${COMPONENT_NAME}]`;
  const components = document.querySelectorAll(COMPONENT_SELECTOR);

  for (let i = 0; i < components.length; i++) {
    const options = JSON.parse(
      components[i].getAttribute(COMPONENT_NAME) || '{}'
    );
    console.log(components);
    let glide = new Glide(components[i], options);

    glide.mount();
  }
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
