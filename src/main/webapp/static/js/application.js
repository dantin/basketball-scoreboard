function save(form, url, step) {
	$(form).attr('action', url);
	if(step != undefined) {
		$(form).find('input[name=step]').val(step);
	}
	$(form).submit();
}

function ajaxSave(form, url) {
	$.post(url, $(form).serialize());
}

function appendPane(link) {
	var url = $(link).attr('href');
	var panes = new Array();
	$('li.active').each(function () {
		var pane = $( this ).find("a").attr("href");
		panes.push(pane.substring(1, pane.length - "-pane".length));
	});

	url +="?pane=" + panes.toString();
	$(link).attr('href', url);
}

function toggleDetail(node) {
	// toggle detail
	$(node).closest('tr').next('tr').fadeToggle();
	// change display icon and message
	var flagNode = $(node).children('span');
	if(flagNode.hasClass('glyphicon-chevron-down')) {
		flagNode.removeClass('glyphicon-chevron-down');
		flagNode.addClass('glyphicon-chevron-up');
	} else {
		flagNode.removeClass('glyphicon-chevron-up');
		flagNode.addClass('glyphicon-chevron-down');
	}
}