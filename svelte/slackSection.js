/* slackSection.svelte generated by Svelte v3.12.1 */
import {
	SvelteElement,
	append,
	attr,
	binding_callbacks,
	destroy_each,
	detach,
	element,
	empty,
	flush,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_custom_element_data,
	set_style,
	space
} from "./svelte/internal.js";
import { createEventDispatcher, onMount } from "./svelte/svelte.js";

import {markdownSlackified} from "./markdownSlackified.js"
import {slackButton} from "./slackButton.js"
import {MarkdownMarkup} from "https://unpkg.com/tonysoft@^1.55.47/markdown-markup.js?module"

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thisSection = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (14:8) {#if (thisSection && thisSection.accessory && (thisSection.accessory.type === "button"))}
function create_if_block(ctx) {
	var slack_button, slack_button_block_value, dispose;

	return {
		c() {
			slack_button = element("slack-button");
			set_custom_element_data(slack_button, "block", slack_button_block_value = ctx.thisSection.accessory);
			set_custom_element_data(slack_button, "class", "accessory");
			set_custom_element_data(slack_button, "display", "");
			dispose = listen(slack_button, "block", buttonBlock);
		},

		m(target, anchor) {
			insert(target, slack_button, anchor);
		},

		p(changed, ctx) {
			if ((changed.sections) && slack_button_block_value !== (slack_button_block_value = ctx.thisSection.accessory)) {
				set_custom_element_data(slack_button, "block", slack_button_block_value);
			}
		},

		d(detaching) {
			if (detaching) {
				detach(slack_button);
			}

			dispose();
		}
	};
}

// (13:1) {#each sections as thisSection, i}
function create_each_block(ctx) {
	var if_block_anchor;

	var if_block = ((ctx.thisSection && ctx.thisSection.accessory && (ctx.thisSection.accessory.type === "button"))) && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},

		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},

		p(changed, ctx) {
			if ((ctx.thisSection && ctx.thisSection.accessory && (ctx.thisSection.accessory.type === "button"))) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		d(detaching) {
			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(if_block_anchor);
			}
		}
	};
}

function create_fragment(ctx) {
	var div5, div4, div3, div2, div1, div0, span, t0, t1, div6, markdown_slackified, t2, markdown_markup, t3, link0, t4, link1, t5, link2;

	let each_value = ctx.sections;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			span = element("span");
			t0 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			div6 = element("div");
			markdown_slackified = element("markdown-slackified");
			t2 = space();
			markdown_markup = element("markdown-markup");
			t3 = space();
			link0 = element("link");
			t4 = space();
			link1 = element("link");
			t5 = space();
			link2 = element("link");
			this.c = noop;
			attr(span, "dir", "auto");
			attr(div0, "class", "p-mrkdwn_element");
			attr(div1, "class", "p-section_block__text");
			attr(div2, "class", "p-section_block_text_content");
			attr(div3, "data-qa", "bk_section_block");
			attr(div3, "class", "p-section_block p-section_block--no_top_margin");
			attr(div4, "class", "p-block_kit_renderer__block_wrapper");
			attr(div5, "class", "flexRow");
			set_style(div5, "display", ctx.display);
			set_style(div6, "display", "none");
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
			insert(target, div5, anchor);
			append(div5, div4);
			append(div4, div3);
			append(div3, div2);
			append(div2, div1);
			append(div1, div0);
			append(div0, span);
			ctx.span_binding(span);
			append(div5, t0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div5, null);
			}

			ctx.div5_binding(div5);
			insert(target, t1, anchor);
			insert(target, div6, anchor);
			append(div6, markdown_slackified);
			ctx.markdown_slackified_binding(markdown_slackified);
			append(div6, t2);
			append(div6, markdown_markup);
			ctx.markdown_markup_binding(markdown_markup);
			insert(target, t3, anchor);
			insert(target, link0, anchor);
			insert(target, t4, anchor);
			insert(target, link1, anchor);
			insert(target, t5, anchor);
			insert(target, link2, anchor);
		},

		p(changed, ctx) {
			if (changed.sections) {
				each_value = ctx.sections;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div5, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.display) {
				set_style(div5, "display", ctx.display);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(div5);
			}

			ctx.span_binding(null);

			destroy_each(each_blocks, detaching);

			ctx.div5_binding(null);

			if (detaching) {
				detach(t1);
				detach(div6);
			}

			ctx.markdown_slackified_binding(null);
			ctx.markdown_markup_binding(null);

			if (detaching) {
				detach(t3);
				detach(link0);
				detach(t4);
				detach(link1);
				detach(t5);
				detach(link2);
			}
		}
	};
}

function buttonBlock(event) {
    console.log(event);
}

function instance($$self, $$props, $$invalidate) {
	

	const dispatch = createEventDispatcher();

    let markdownSlackifiedConverter;
    let markdownMarkupConverter;

    //const markdownSlackifiedConverter = new markdownSlackified();
    //const markdownMarkupConverter = new MarkdownMarkup();

    const blockKitJSON = {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": ""
        }
	}

    let { markdown, display = "block", section } = $$props;

    let sections = [];

    let mainContainer;
    let sectionMarkup;

    function markdownToMarkup() {
        var blockKit = null;
        if (markdown) {
            var parentComponent = mainContainer.parentNode.host;
            var width = parentComponent.offsetWidth;
            $$invalidate('mainContainer', mainContainer.style.width = parentComponent.style.width || "500px", mainContainer);
            var markup = markdownMarkupConverter.convertMarkdown(markdown, 18, 3);
            if (display !== "none") {
                $$invalidate('sectionMarkup', sectionMarkup.innerHTML = markup, sectionMarkup);
            }
            var slackified = markdownSlackifiedConverter.slackify(markdown);
            if (slackified.lastIndexOf("\n") === (slackified.length - 1)) {
                slackified = slackified.substring(0, slackified.length - 1);
            }
            blockKit = JSON.parse(JSON.stringify(section || blockKitJSON));
            blockKit.text.text = slackified;
			event("block", blockKit);
        }
        return blockKit;
    }

	onMount(() => {
        setTimeout(function() {
            markdownToMarkup();
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

	function div5_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('mainContainer', mainContainer = $$value);
		});
	}

	function markdown_slackified_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('markdownSlackifiedConverter', markdownSlackifiedConverter = $$value);
		});
	}

	function markdown_markup_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('markdownMarkupConverter', markdownMarkupConverter = $$value);
		});
	}

	$$self.$set = $$props => {
		if ('markdown' in $$props) $$invalidate('markdown', markdown = $$props.markdown);
		if ('display' in $$props) $$invalidate('display', display = $$props.display);
		if ('section' in $$props) $$invalidate('section', section = $$props.section);
	};

	$$self.$$.update = ($$dirty = { section: 1, sectionArray: 1, markdown: 1 }) => {
		if ($$dirty.section || $$dirty.sectionArray) { if (section) {
                if (section.split) {
                    $$invalidate('section', section = JSON.parse(section));
                }
                if ((section.type === "section") && section.text && section.text.text) {
                    $$invalidate('markdown', markdown = section.text.text);
                }
                var sectionArray = [section];
                $$invalidate('sections', sections = sectionArray);
        	} }
		if ($$dirty.markdown) { if (markdown) {
                markdownToMarkup();
        	} }
	};

	return {
		markdownSlackifiedConverter,
		markdownMarkupConverter,
		markdown,
		display,
		section,
		sections,
		mainContainer,
		sectionMarkup,
		span_binding,
		div5_binding,
		markdown_slackified_binding,
		markdown_markup_binding
	};
}

class slackSection extends SvelteElement {
	constructor(options) {
		super();

		this.shadowRoot.innerHTML = `<style>*{font-family:Slack-Lato, appleLogo, sans-serif}.accessory{margin-left:10px}.flexRow{display:flex;flex-direction:row;justify-content:space-between}</style>`;

		init(this, { target: this.shadowRoot }, instance, create_fragment, safe_not_equal, ["markdown", "display", "section"]);

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
		return ["markdown","display","section"];
	}

	get markdown() {
		return this.$$.ctx.markdown;
	}

	set markdown(markdown) {
		this.$set({ markdown });
		flush();
	}

	get display() {
		return this.$$.ctx.display;
	}

	set display(display) {
		this.$set({ display });
		flush();
	}

	get section() {
		return this.$$.ctx.section;
	}

	set section(section) {
		this.$set({ section });
		flush();
	}
}

export {slackSection};
window.customElements.define('slack-section', slackSection);