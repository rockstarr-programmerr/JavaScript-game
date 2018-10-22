// Buy weapons

$('.store-ak47-img').click(function() {
	$('.flying-ak47').animate({
		opacity: '1',
		top: '300px',
		left: '0'
	}, 0);
	$('.flying-ak47').animate({
		top: '550px',
		left: ak47.leftPosition,
		width: '75px',
		height: '75px'
	}, 300, 'linear');
	$('.flying-ak47').animate({
		opacity: '0',
		top: '300px',
		left: '-100px',
		width: '100px',
		height: '78px'
	}, 0);
});

$('.store-dragunov-img').click(function() {
	$('.flying-dragunov').animate({
		opacity: '1',
		top: '380px',
		left: '0'
	}, 0);
	$('.flying-dragunov').animate({
		top: '550px',
		left: dragunov.leftPosition,
		width: '75px',
		height: '75px'
	}, 300, 'linear');
	$('.flying-dragunov').animate({
		opacity: '0',
		top: '300px',
		left: '-100px',
		width: '100px',
		height: '78px'
	}, 0);
});

$('.store-mp5-img').click(function() {
	$('.flying-mp5').animate({
		opacity: '1',
		top: '460px',
		left: '0'
	}, 0);
	$('.flying-mp5').animate({
		top: '550px',
		left: machineGun.leftPosition,
		width: '75px',
		height: '75px'
	}, 300, 'linear');
	$('.flying-mp5').animate({
		opacity: '0',
		top: '300px',
		left: '-100px',
		width: '100px',
		height: '78px'
	}, 0);
});

$('.store-rpg-img').click(function() {
	$('.flying-rpg').animate({
		opacity: '1',
		top: '540px',
		left: '0'
	}, 0);
	$('.flying-rpg').animate({
		top: '550px',
		left: grenade.leftPosition,
		width: '75px',
		height: '75px'
	}, 300, 'linear');
	$('.flying-rpg').animate({
		opacity: '0',
		top: '300px',
		left: '-100px',
		width: '100px',
		height: '78px'
	}, 0);
});

$('.store-tomahawk-img').click(function() {
	$('.flying-tomahawk').animate({
		opacity: '1',
		top: '620px',
		left: '0'
	}, 0);
	$('.flying-tomahawk').animate({
		top: '550px',
		left: tomahawk.leftPosition,
		width: '75px',
		height: '75px'
	}, 300, 'linear');
	$('.flying-tomahawk').animate({
		opacity: '0',
		top: '300px',
		left: '-100px',
		width: '100px',
		height: '78px'
	}, 0);
});