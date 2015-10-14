(function(){

	var descBody={ beauty:"Responsive front end website developed for start-up beautician\n"+
	"Technologies used HTML5, CSS3, jQuery, javaScript, bootstrap",
	 sorting : "Web app that animates various simple algorithms for mainpulating the elements of an array\n"+
	 "Technologies used: HTML5, CSS3, Javascript JQuery",
	  quote: "A simple app that generates a random quote from an array and allows the user to tweet a quote\n"+
	  "Technologies used: HTML5, CSS3, jQuery, twitterAPI",
	   weather : "A simple app that displays the weather for your location\n"+
	   "Technologies used: HTML5, CSS3, jQuery, openweatherAPI"};
	
	$('.descButton').on('click', function(){
		var $this = $(this),
				    desc = $this.data('file');	    

		$('<div></div', {
			id: desc+"Modal",
			class: "modal fade"
		}).insertAfter('.' + desc);
		$('<div></div>',{
			class: "modal-dialog"
		}).appendTo('#'+desc+'Modal');
		$('<div></div>',{
			class: "modal-content"
		}).appendTo('.modal-dialog');
		$('<div></div>',{
			class: "modal-header"
		}).appendTo('.modal-content');
		$('.modal-header').append('<button type=\"button\" class=\"close\" data-dismiss = \"modal\"'+
			'aria-hidden=\"true\">&times;</button>');
		$('<h4></h4>',{
			class: "modal-title",
			text: desc.toUpperCase()
		}).insertAfter('button.close');
		$('<div></div>',{
			class: "modal-body"
		}).insertAfter('.modal-header');
		$('<p></p>',{
			text: descBody[desc]
		}).appendTo('.modal-body');



		$('#'+desc+'Modal').modal('show');
	
	});

	
})();


