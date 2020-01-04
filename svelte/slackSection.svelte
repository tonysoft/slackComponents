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
    {#if (section && section.accessory && (section.accessory.type === "button"))}
        <slack-button class="accessory" label=":ghost:" value="TestButton" display=""></slack-button>
    {/if}
</div> 

<div style="display: none;">
    <markdown-slackified bind:this={markdownSlackifiedConverter}></markdown-slackified>
    <markdown-markup bind:this={markdownMarkupConverter}></markdown-markup>
</div>
<style>
    * {
        font-family: Slack-Lato, appleLogo, sans-serif;
    }

    .accessory {
        position: relative;
        top: 5px;
        margin-left: 10px;
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
	import {slackButton} from "./slackButton.js"
    import {MarkdownMarkup} from "https://unpkg.com/tonysoft@^1.55.47/markdown-markup.js?module"

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
    export let section;

    let mainContainer;
    let sectionMarkup;

    function markdownToMarkup() {
        var blockKit = null;
        if (markdown) {
            var parentComponent = mainContainer.parentNode.host;
            var width = parentComponent.offsetWidth;
            mainContainer.style.width = parentComponent.style.width;
            var markup = markdownMarkupConverter.convertMarkdown(markdown, 18, 3);
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

	$: if (section) {
        if (section.split) {
            section = JSON.parse(section);
        }
        if ((section.type === "section") && section.text && section.text.text) {
            markdown = section.text.text;
        }
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
