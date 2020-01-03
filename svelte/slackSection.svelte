<div class="flexRow" style="display: {display};" bind:this={mainContainer}>
    <div class="p-block_kit_renderer__block_wrapper">
        <div data-qa="bk_section_block" class="p-section_block p-section_block--no_top_margin">
            <div class="p-section_block_text_content">
                <div class="p-section_block__text">
                    <div class="p-mrkdwn_element">
                        <span dir="auto" bind:this={sectionMarkup}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div bind:this={accessoryBlock} class="accessoryVisible accessoryHidden">
        <button class="c-button c-button--outline c-button--small p-block_kit_button_element null--outline null--small" type="button" data-qa-block-id="l07=" data-qa-action-id="2JA2A">
            <div class="p-plain_text_element" data-qa="bk-plain_text_element">
                <span dir="auto">Button1</span>
            </div>
        </button>
    </div>
</div> 

<div style="display: none;">
    <markdown-slackified bind:this={markdownSlackifiedConverter}></markdown-slackified>
    <markdown-markup bind:this={markdownMarkupConverter}></markdown-markup>
</div>
<style>
    * {
        font-family: Slack-Lato, appleLogo, sans-serif;
    }

    .accessoryHidden {
        display: none;
    }

    .accessoryVisible {
        display: flex;
    }

    .flexRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>
<link href="https://unpkg.com/tonysoft@1.55.21/css/rollup-slack_kit_base.css" rel="stylesheet" type="text/css">
<link href="https://unpkg.com/tonysoft@1.55.21/css/slackBlockKit.css" rel="stylesheet" type="text/css">
<link href="https://unpkg.com/tonysoft@1.55.21/css/slackBlockKitBuilder.css" rel="stylesheet" type="text/css">
<script>
	import {markdownSlackified} from "./markdownSlackified.js"
    import {MarkdownMarkup} from "https://unpkg.com/tonysoft@^1.55.27/markdown-markup.js?module"

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

    export let markdown;
    export let display = "block";
    export let accessory;

    let mainContainer;
    let sectionMarkup;
    let accessoryBlock;

    function markdownToMarkup() {
        var blockKit = null;
        if (markdown) {
            var parentComponent = mainContainer.parentNode.host;
            var width = parentComponent.offsetWidth;
            mainContainer.style.width = parentComponent.style.width;
            var markup = markdownMarkupConverter.convertMarkdown(markdown);
            if (display !== "none") {
                sectionMarkup.innerHTML = markup;
            }
            var slackified = markdownSlackifiedConverter.slackify(markdown);
            if (slackified.lastIndexOf("\n") === (slackified.length - 1)) {
                slackified = slackified.substring(0, slackified.length - 1);
            }
            blockKit = JSON.parse(JSON.stringify(blockKitJSON));
            blockKit.text.text = slackified;
			event("blockKit", blockKit);
        }
        return blockKit;
    }
 
	$: if (markdown) {
        markdownToMarkup();
	}

	$: if (accessory) {
        accessoryBlock.classList.add("accessoryVisible");
	}

	onMount(() => {
        setTimeout(function() {
            markdownToMarkup();
        });
	});

	function event(eventName, payload) {
        dispatch(eventName, payload);
	}
</script>
