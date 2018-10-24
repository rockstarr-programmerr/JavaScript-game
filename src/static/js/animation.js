
// Buy weapons

// // A function to find left position of each weapon:
let weaponLeftPos;
function findWeaponPosition(weaponObject) {
	let weaponIndex = player.arsenal.indexOf(weaponObject);
	switch (weaponIndex) {
		case 0:
			weaponLeftPos = '300px';
			break;
		case 1:
			weaponLeftPos = '375px';
			break;
		case 2:
			weaponLeftPos = '450px';
			break;
		case 3:
			weaponLeftPos = '525px';
			break;
		case 4:
			weaponLeftPos = '600px';
			break;
		default:
			weaponLeftPos = '300px';
	}
	return weaponLeftPos;
}

// // Animation of the buy weapon process:

$('.store-ak47-img').click(function() {
	if ((adjustedBudget + ak47.price) >= ak47.price) {
		$('.flying-ak47').animate({
			opacity: '1',
			top: '300px',
			left: '0'
		}, 0).animate({
			top: '550px',
			left: findWeaponPosition(ak47),
			width: '75px',
			height: '75px'
		}, 300, 'linear').animate({
			opacity: '0',
			top: '300px',
			left: '-100px',
			width: '100px',
			height: '78px'
		}, 0);
	}
});

$('.store-dragunov-img').click(function() {
	if ((adjustedBudget + dragunov.price) >= dragunov.price) {
		$('.flying-dragunov').animate({
			opacity: '1',
			top: '380px',
			left: '0'
		}, 0).animate({
			top: '550px',
			left: findWeaponPosition(dragunov),
			width: '75px',
			height: '75px'
		}, 300, 'linear').animate({
			opacity: '0',
			top: '300px',
			left: '-100px',
			width: '100px',
			height: '78px'
		}, 0);
	}
});

$('.store-mp5-img').click(function() {
	if ((adjustedBudget + mp5.price) >= mp5.price) {
		$('.flying-mp5').animate({
			opacity: '1',
			top: '460px',
			left: '0'
		}, 0).animate({
			top: '550px',
			left: findWeaponPosition(mp5),
			width: '75px',
			height: '75px'
		}, 300, 'linear').animate({
			opacity: '0',
			top: '300px',
			left: '-100px',
			width: '100px',
			height: '78px'
		}, 0);
	}	
});

$('.store-rpg-img').click(function() {
	if ((adjustedBudget + rpg.price) >= rpg.price) {
		$('.flying-rpg').animate({
			opacity: '1',
			top: '540px',
			left: '0'
		}, 0).animate({
			top: '550px',
			left: findWeaponPosition(rpg),
			width: '75px',
			height: '75px'
		}, 300, 'linear').animate({
			opacity: '0',
			top: '300px',
			left: '-100px',
			width: '100px',
			height: '78px'
		}, 0);
	}	
});

$('.store-tomahawk-img').click(function() {
	if ((adjustedBudget + tomahawk.price) >= tomahawk.price) {
		$('.flying-tomahawk').animate({
			opacity: '1',
			top: '620px',
			left: '0'
		}, 0).animate({
			top: '550px',
			left: findWeaponPosition(tomahawk),
			width: '75px',
			height: '75px'
		}, 300, 'linear').animate({
			opacity: '0',
			top: '300px',
			left: '-100px',
			width: '100px',
			height: '78px'
		}, 0);
	}
});	

/* Animation of the attacking phase */
let targetLeftPos;
function findTargetPosition(target) {
	if (target === workplace) {
		targetLeftPos = '400px';
	} else if (target === school) {
		targetLeftPos = '810px';
	}
	return targetLeftPos;
}

for (let target of [school, workplace]) {
	$('.' + target.name + '-img-container').click(function() {
		if ((attWeap === ak47 || attWeap === mp5) && (attWeap.amo > 0 && target.destroyStatus == false)) {
			for (i = 0; i < 3; i++) {
				$('.' + attWeap.objectName + '-bullet').animate({
					opacity: '1',
					top: '510px',
					left: findWeaponPosition(attWeap)
				}, 0).animate({
					top: '140px',
					left: findTargetPosition(target)
				}, attWeap.animationTime, 'linear').animate({
					opacity: 0,
					left: '-50px'
				}, 0);
			}
		} else if ((attWeap === dragunov || attWeap === rpg || attWeap === tomahawk) && (attWeap.amo > 0 && target.destroyStatus == false)) {
			$('.' + attWeap.objectName + '-bullet').animate({
				opacity: '1',
				top: '510px',
				left: findWeaponPosition(attWeap)
			}, 0).animate({
				top: '140px',
				left: findTargetPosition(target)
			}, attWeap.animationTime, 'linear').animate({
				opacity: 0,
				left: '-50px'
			}, 0);
		}	
	});	
}

	
