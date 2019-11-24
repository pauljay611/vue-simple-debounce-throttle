import debounce from './debounce'
import throttle from './throttle'

const plugin = {
	/**
	 * Install plugin.
	 * @param {Object} Vue
	 * @param {Object} options
	 */
	install: function(Vue, options) {
		Vue.directive('debounce', {
			bind(el, { value, arg, modifiers }) {
				const event = Object.keys(modifiers)[0]

				el.addEventListener(event, debounce(value, arg))
			}
		})
		Vue.directive('throttle', {
			bind(el, { value, arg, modifiers }) {
				const event = Object.keys(modifiers)[0]

				el.addEventListener(event, throttle(value, arg))
			}
		})
	}
}

/**
 * Install plugin automatically
 */

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(plugin)
}

export default plugin
