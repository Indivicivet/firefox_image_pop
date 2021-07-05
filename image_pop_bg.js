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
					code: `console.log("pop!");`
				}).then(
					() => {
						browser.tabs.create({});  // url: ""
					}
				);
				break;
		}
	}
);
