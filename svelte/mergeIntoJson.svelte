<script>
    export let json = {};
    export let data = {};

	$: if (json) {
        if (json.split) {
            json = JSON.parse(json);
        }
	}

	$: if (data) {
        if (data.split) {
            data = JSON.parse(data);
        }
	}

    export function merge(json, data) {
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
</script>