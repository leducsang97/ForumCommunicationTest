// Custom Javascript Widget
// Create a custom widget using JQuery starting with this structured JSON file: https://www.reddit.com/r/worldnews.json
// The finished widget should display some basic information about the first 5 items in the feed such as title, url, and domain.
// The widget should fit within a standard ad size of 300px wide by 600px tall.
// Design is up to you.  Creativity is encouraged.
const LIMIT_NUMBER = 5;

$.getJSON('https://www.reddit.com/r/worldnews.json', function (dataset) {
	var items = [];
	let data = dataset.data.children;
	console.log(data);

	for (let i = 0; i < 5; i++) {
		let title = data[i].data.title;
		let name = data[i].data.name;
		let url = data[i].data.url;
		//to not capitalize after . in domain
		let [domain, path] = data[i].data.domain.split('.');
		console.log(domain);

		items.push(`
		<div class="widget-element card">
			<a href=${url} target='_blank'>
				<div id=${name} class='title'> ${title} </div>
				<div class='domain-path'>
					<div><span class='domain'>${domain}</span><span>.${path}</span></div>
					<i class="fas fa-chevron-right"></i>
				</div>
			</a>

		</div>`);
	}

	$('<div/>', {
		'class': 'card-container',
		html: items.join('')
	}).appendTo('.widget');
});
