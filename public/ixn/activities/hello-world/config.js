define([], function(){      
    return {
        "icon": "images/jb-icon.jpg",
        "iconSmall": "images/jb-icon.jpg", 
        "key": "jb-hello-world-activity-tak4hir0",
        "partnerApiObjectTypeId": "IXN.CustomActivity.REST",
        "lang": {
            "en-US": {        
                "name": "Hello World Activity 2",
                "description": "Activity simply posts the data into an array for display on the App's home page."
            }
        },
        "category": "messaging",
        "version": "1.0",
        "apiVersion": "1.0",
       "execute": {
            "uri": "https://jbchw.herokuapp.com/ixn/activities/hello-world/execute/",
			"inArguments": [],
			"outArguments": [],
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
		},
        "save": {
            "uri": "https://jbchw.herokuapp.com/ixn/activities/hello-world/save/",
			"verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "publish": {
            "uri": "https://jbchw.herokuapp.com/ixn/activities/hello-world/publish/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "validate": {
            "uri": "https://jbchw.herokuapp.com/ixn/activities/hello-world/validate/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },

        "edit": {
            "uri": "https://jbchw.herokuapp.com/ixn/activities/hello-world/",
            "height": 400,
            "width": 500
        }
};
});
