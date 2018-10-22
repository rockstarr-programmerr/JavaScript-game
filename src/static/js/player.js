let clickedWeapon;

function Player(name, budget, arsenal) {
	this.name = name;
	this.budget = budget;
	this.arsenal = arsenal;

	this.buyWeapon = function(chosenWeapon) {

		// Check to see which weapon did the play click
		switch (chosenWeapon) {
			case 'ak47':
				clickedWeapon = ak47;
				break;
			case 'dragunov':
				clickedWeapon = dragunov;
				break;
			case 'machineGun':
				clickedWeapon = machineGun;
				break;
			case 'grenade':
				clickedWeapon = grenade;
				break;
			case 'tomahawk':
				clickedWeapon = tomahawk;
				break;		
		};

		// Check if player have enough money, then check if the chosen weapon is already in the arsenal
		// If player choose same weapon twice, they have more amo
		// Then show the chosen weapon in the arsenal list
		if (this.budget < clickedWeapon.price) {
			alert("You don't have enough money");
		} else if (this.budget >= clickedWeapon.price) {
			if (this.arsenal.includes(clickedWeapon)) {
				clickedWeapon.amo += clickedWeapon.originalAmo;
				this.budget -= clickedWeapon.price;
				$('#id-' + chosenWeapon).text('x' + clickedWeapon.amo);

			} else if (this.arsenal.includes(clickedWeapon) === false) {
				this.arsenal.push(clickedWeapon);
				this.budget -= clickedWeapon.price;
				$('.arsenal-container').append('<div class="arsenal-weapon"><div class="arsenal-weapon-img"><img onclick="' + clickedWeapon.objectName + '.attack()" src="' + clickedWeapon.imgUrl + '"></div><div class="arsenal-weapon-amo"><p>Amo</p><p id="id-' + chosenWeapon + '">x' + clickedWeapon.amo + '</p></div></div>');
			}
		}

		// Show the remaining money
		$('#player-budget').text(this.budget); // Change later at animation stage

	};

	this.removeWeapon = function() {

	};
}

let player = new Player('You', 50000, []);

// After this, we got a player with an array of weapon opjects