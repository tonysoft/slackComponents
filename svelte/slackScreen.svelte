<div class="flexColumn" style="display: {display};" bind:this={mainContainer}>
    <slack-blocks on:blocksProcessed={blocksProcessed} blocks={blocks} display="" style="width: {width}"  bind:this={slackBlocksElement}></slack-blocks>
</div> 
<style>
    .flexColumn {
        display: flex;
        flex-direction: column;
    }
</style>
<script>
	import {slackBlocks} from "./slackBlocks.js"
	import {mergeIntoJSON} from "./mergeIntoJson.js"

	const dispatch = createEventDispatcher();

    export let display = "block";
    export let definition;
    export let data;
    export let blocks = [];

    let blocksToProcess = [];


    let mainContainer;
    let slackBlocksElement;
    
    let width = "300px";

	$: if (definition) {
        if (definition.split) {
            definition = JSON.parse(definition);
        }
        checkProcess();
	}

	$: if (data) {
        if (data.split) {
            data = JSON.parse(data);
        }
        checkProcess();
	}

    function checkProcess() {
        if (data && definition) {
            process();
        }
    }

	$: if (blocks) {
        if (blocks.split) {
            blocks = JSON.parse(blocks);
        }
        process();
	}

	onMount(() => {
        setTimeout(function() {
            var parentComponent = mainContainer.parentNode.host;
            //var width = parentComponent.offsetWidth;
            width = mainContainer.style.width = parentComponent.style.width || "500px";
            slackBlocksElement.width = width;
        });
	});

    function blocksProcessed(e) {
        var blocks = e.detail;
        event("blocksProcessed", blocks);
    }

	function event(eventName, payload) {
        dispatch(eventName, payload);
	}

    function process() {
        //slackBlocksElement.blocks = blocks;
    }

</script>
