var rules = [
    'gb',
    'lhn-add-subscription-section',
    'viewer-header-container',
    'logo-section',
];

var hiding = true;
function toggleHiding() {
    for (var i=0; i<rules.length; i++) {
	var rule = rules[i];
	var e = document.getElementById(rule);
	if (e) {
	    if (hiding) {
		e.classList.add('-webtick-display-none');
	    } else {
		e.classList.remove('-webtick-display-none');
	    }
	}
    }
    hiding = !hiding;
}
toggleHiding();

function keydown(e) {
    if (e.keyCode === 192) {
	toggleHiding();
	return false;
    }
}

document.addEventListener('keydown', keydown);
