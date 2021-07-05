browser.contextMenus.create(
	{
		id: "image_pop",
		title: "Image Pop",
		contexts: ["all"]
	},
	() => {}
);

browser.contextMenus.onClicked.addListener(
	(info, tab) => {
		switch (info.menuItemId) {
			case "image_pop":
				browser.tabs.executeScript({
					file: "image_pop_thistab.js"
				}).then(
					(result) => {
						for (const url of result[0]) {
							browser.tabs.create({url: url});
						}
					}
				);
				break;
		}
	}
);
