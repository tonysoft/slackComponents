/* slackButton.svelte generated by Svelte v3.12.1 */
import {
	SvelteElement,
	append,
	attr,
	binding_callbacks,
	detach,
	element,
	flush,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style,
	space
} from "./svelte/internal.js";
import { createEventDispatcher, onMount } from "./svelte/svelte.js";

import {MarkdownMarkup} from "https://unpkg.com/tonysoft@^1.55.47/markdown-markup.js?module"

function create_fragment(ctx) {
	var div1, button, div0, span, t0, div2, markdown_markup, t1, link0, t2, link1, t3, link2;

	return {
		c() {
			div1 = element("div");
			button = element("button");
			div0 = element("div");
			span = element("span");
			t0 = space();
			div2 = element("div");
			markdown_markup = element("markdown-markup");
			t1 = space();
			link0 = element("link");
			t2 = space();
			link1 = element("link");
			t3 = space();
			link2 = element("link");
			this.c = noop;
			attr(span, "dir", "auto");
			attr(div0, "class", "p-plain_text_element");
			attr(div0, "data-qa", "bk-plain_text_element");
			attr(button, "class", "c-button c-button--outline c-button--small p-block_kit_button_element null--outline null--small");
			attr(button, "type", "button");
			attr(button, "data-qa-block-id", "l07=");
			attr(button, "data-qa-action-id", "2JA2A");
			attr(div1, "class", "flexRow");
			set_style(div1, "display", ctx.display);
			set_style(div2, "display", "none");
			attr(link0, "href", "https://unpkg.com/tonysoft@1.55.21/css/rollup-slack_kit_base.css");
			attr(link0, "rel", "stylesheet");
			attr(link0, "type", "text/css");
			attr(link1, "href", "https://unpkg.com/tonysoft@1.55.21/css/slackBlockKit.css");
			attr(link1, "rel", "stylesheet");
			attr(link1, "type", "text/css");
			attr(link2, "href", "https://unpkg.com/tonysoft@1.55.21/css/slackBlockKitBuilder.css");
			attr(link2, "rel", "stylesheet");
			attr(link2, "type", "text/css");
		},

		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, button);
			append(button, div0);
			append(div0, span);
			ctx.span_binding(span);
			insert(target, t0, anchor);
			insert(target, div2, anchor);
			append(div2, markdown_markup);
			ctx.markdown_markup_binding(markdown_markup);
			insert(target, t1, anchor);
			insert(target, link0, anchor);
			insert(target, t2, anchor);
			insert(target, link1, anchor);
			insert(target, t3, anchor);
			insert(target, link2, anchor);
		},

		p(changed, ctx) {
			if (changed.display) {
				set_style(div1, "display", ctx.display);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(div1);
			}

			ctx.span_binding(null);

			if (detaching) {
				detach(t0);
				detach(div2);
			}

			ctx.markdown_markup_binding(null);

			if (detaching) {
				detach(t1);
				detach(link0);
				detach(t2);
				detach(link1);
				detach(t3);
				detach(link2);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();

    let markdownMarkupConverter;

    let blockKitJSON = {
        "type": "button",
        "text": {
            "type": "plain_text",
            "text": "",
            "emoji": true
        },
        "value": ""
    }

    let { label, value = "buttonClick", display = "block", block } = $$props;

    let mainContainer;
    let sectionMarkup;

    function textToMarkup() {
        var blockKit = null;
        if (label) {
            var markup = markdownMarkupConverter.convertMarkdown(label, 20, 1);
            if (display !== "none") {
                markup = markup.replace("<p>", "");
                markup = markup.replace("</p>", "");
                $$invalidate('sectionMarkup', sectionMarkup.innerHTML = markup, sectionMarkup);
            }
            blockKit = JSON.parse(JSON.stringify(blockKitJSON));
            blockKit.text.text = label;
            blockKit.value = value;
			event("block", blockKit);
        }
        return blockKit;
    }

	onMount(() => {
        setTimeout(function() {
            textToMarkup();
        });
	});

	function event(eventName, payload) {
        dispatch(eventName, payload);
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('sectionMarkup', sectionMarkup = $$value);
		});
	}

	function markdown_markup_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('markdownMarkupConverter', markdownMarkupConverter = $$value);
		});
	}

	$$self.$set = $$props => {
		if ('label' in $$props) $$invalidate('label', label = $$props.label);
		if ('value' in $$props) $$invalidate('value', value = $$props.value);
		if ('display' in $$props) $$invalidate('display', display = $$props.display);
		if ('block' in $$props) $$invalidate('block', block = $$props.block);
	};

	$$self.$$.update = ($$dirty = { block: 1, label: 1 }) => {
		if ($$dirty.block) { if (block) {
                if (block.split) {
                    $$invalidate('block', block = JSON.parse(block));
                }
                blockKitJSON = block;
                $$invalidate('label', label = block.text.text);
                $$invalidate('value', value = block.value);
        	} }
		if ($$dirty.label) { if (label) {
                textToMarkup();
        	} }
	};

	return {
		markdownMarkupConverter,
		label,
		value,
		display,
		block,
		sectionMarkup,
		span_binding,
		markdown_markup_binding
	};
}

class slackButton extends SvelteElement {
	constructor(options) {
		super();

		this.shadowRoot.innerHTML = `<style>*{font-family:Slack-Lato, appleLogo, sans-serif}.flexRow{display:flex;flex-direction:row;justify-content:space-between}</style>`;

		init(this, { target: this.shadowRoot }, instance, create_fragment, safe_not_equal, ["label", "value", "display", "block"]);

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
		return ["label","value","display","block"];
	}

	get label() {
		return this.$$.ctx.label;
	}

	set label(label) {
		this.$set({ label });
		flush();
	}

	get value() {
		return this.$$.ctx.value;
	}

	set value(value) {
		this.$set({ value });
		flush();
	}

	get display() {
		return this.$$.ctx.display;
	}

	set display(display) {
		this.$set({ display });
		flush();
	}

	get block() {
		return this.$$.ctx.block;
	}

	set block(block) {
		this.$set({ block });
		flush();
	}
}

export {slackButton};
window.customElements.define('slack-button', slackButton);