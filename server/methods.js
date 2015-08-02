Meteor.methods({
	subscribeUser: function(email) {
		var key = '18305503b6712be6a27e91311b39f9d0-us11',
			listId = '151cd79a2d';
		var mailingLists = new MailChimpLists( key, { version : '2.0' } );
		console.log(email)
		if(email) {
			mailingLists.subscribe({id: listId, doublt_optin: false, email: {email: email}}, function(err, result) {
				if(err) {
					console.log(err)
				} else {
					return true;
				}
			});
		} else {
			return false;
		}
	}
})