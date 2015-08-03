Router.route('/', {
	name: 'hello',
	action: function() {
		document.title = "Counting to 1000"
		GAnalytics.pageview("/");
		this.render('hello')
		this.next()
	}
});