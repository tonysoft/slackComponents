/* mergeIntoJSON.svelte generated by Svelte v3.12.1 */
import {
	SvelteElement,
	flush,
	init,
	insert,
	noop,
	safe_not_equal
} from "./svelte/internal.js";

function create_fragment(ctx) {
	return {
		c() {
			this.c = noop;
		},

		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

function merge(json, data) {
    var jsonString = JSON.stringify(json);
    for (var prop in data) {
        var value = data[prop];
        var subKey = "${" + prop + "}";
        while (jsonString.indexOf(subKey) >= 0) {
            jsonString = jsonString.replace(subKey, value);
        }
    }
    var merged = JSON.parse(jsonString);
    return merged;
}

function instance($$self, $$props, $$invalidate) {
	let { json = {}, data = {} } = $$props;

	$$self.$set = $$props => {
		if ('json' in $$props) $$invalidate('json', json = $$props.json);
		if ('data' in $$props) $$invalidate('data', data = $$props.data);
	};

	$$self.$$.update = ($$dirty = { json: 1, data: 1 }) => {
		if ($$dirty.json) { if (json) {
                if (json.split) {
                    $$invalidate('json', json = JSON.parse(json));
                }
        	} }
		if ($$dirty.data) { if (data) {
                if (data.split) {
                    $$invalidate('data', data = JSON.parse(data));
                }
        	} }
	};

	return { json, data };
}

class mergeIntoJSON extends SvelteElement {
	constructor(options) {
		super();

		init(this, { target: this.shadowRoot }, instance, create_fragment, safe_not_equal, ["json", "data", "merge"]);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}

			if (options.props) {
				this.$set(options.props);
				flush();
			}
		}
	}

	static get observedAttributes() {
		return ["json","data","merge"];
	}

	get json() {
		return this.$$.ctx.json;
	}

	set json(json) {
		this.$set({ json });
		flush();
	}

	get data() {
		return this.$$.ctx.data;
	}

	set data(data) {
		this.$set({ data });
		flush();
	}

	get merge() {
		return merge;
	}
}

export {mergeIntoJSON};
window.customElements.define('merge-into-json', mergeIntoJSON);
