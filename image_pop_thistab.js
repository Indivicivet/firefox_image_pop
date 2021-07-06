// todo this works for new tabs but badly for flicked! grab from meta??
script_results = [];
for (const script of document.querySelectorAll("script,meta")) {
	urls = script.text.match(/"https[^"]+\.(?:jpg|jpeg|png|webp|gif|mp4|webm|wmv)"/i)
	if (urls) {
		script_results.push(
			...urls.map((s) => {return decodeURIComponent(JSON.parse(s))})
		)
	};
}

script_results.concat([...document.images].map((im) => {return im.src}));
