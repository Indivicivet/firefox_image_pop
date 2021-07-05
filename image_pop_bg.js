browser.contextMenus.create(
	{
		id: "image_pop",
		title: "Image Pop",
		contexts: ["all"]
	},
	() => {}
);

MAX_POP_N = 3;

browser.contextMenus.onClicked.addListener(
	(info, tab) => {
		switch (info.menuItemId) {
			case "image_pop":
				browser.tabs.executeScript({
					file: "image_pop_thistab.js"
				}).then(
					(result) => {
						for (const url of result[0].slice(0, MAX_POP_N)) {
							browser.tabs.create({url: url});
						}
						if (result[0].length > MAX_POP_N) {
							console.warn("only popping " + MAX_POP_N + " of " + result[0].length);
						}
					}
				);
				break;
		}
	}
);
