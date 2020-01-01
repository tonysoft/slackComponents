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
        </div><style>
* {
    font-family: Slack-Lato, appleLogo, sans-serif;
}
</style>
<link href="https://unpkg.com/tonysoft@1.55.21/css/rollup-slack_kit_base.css" rel="stylesheet" type="text/css">
<link href="https://unpkg.com/tonysoft@1.55.21/css/slackBlockKit.css" rel="stylesheet" type="text/css">
<link href="https://unpkg.com/tonysoft@1.55.21/css/slackBlockKitBuilder.css" rel="stylesheet" type="text/css">
<script>
	import {markdownSlackified} from "./markdownSlackified.js"
    import {MarkdownMarkup} from "https://unpkg.com/tonysoft@^1.55.27/markdown-markup.js?module"
	const dispatch = createEventDispatcher();

    let markdownSlackifiedConverter = new markdownSlackified();
    let markdownMarkupConverter = new MarkdownMarkup()

    export let markdown;

    let sectionMarkup;

    function markdownToMarkup() {
        if (markdown) {
            var markup = markdownMarkupConverter.convertMarkdown(markdown);
            sectionMarkup.innerHTML = markup;
            event("markup", markup);
            var slackified = markdownSlackifiedConverter.slackify(markdown);
            event("slackified", slackified);
        }
    }
 
	$: if (markdown) {
        markdownToMarkup();
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
