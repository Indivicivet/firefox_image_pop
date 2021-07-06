browser.contextMenus.create(
	{
		id: "image_pop",
		title: "Image Pop",
		contexts: ["all"]
	},
	() => {}
);

browser.contextMenus.create(
	{
		id: "image_pop_inplace",
		title: "Image Pop In-Place",
		contexts: ["all"]
	},
	() => {}
);

MAX_POP_N = 3;
// todo :: multiple actions for sequential slices? e.g pop 1, pop 2+3, pop 4-6, pop 1-3, blank, pop 7+ (!DANGER)

browser.contextMenus.onClicked.addListener(
	(info, tab) => {
		ims = browser.tabs.executeScript({
			file: "image_pop_thistab.js"
		});
		switch (info.menuItemId) {
			case "image_pop":
				ims.then(
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
			case "image_pop_inplace":
				// TODO :: not this, should be navigate to...
				ims.then(
					(result) => {browser.tabs.create({url: result[0][0]});}
				);
				break;
		}
	}
);
