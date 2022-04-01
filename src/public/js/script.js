console.log("DONGLES");

const PARAMS = new URLSearchParams(window.location.search);

if (PARAMS.get("random") != null) {
	console.log("random is present");
}

