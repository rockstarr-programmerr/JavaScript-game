let attDam; // The attack's damage
let attAcc; // The attack's accuracy
let targetDestroyed; // Check if both targets are destroyed
let amoOut; // Check if all weapons' amo are out

// Build a function to return a random number 
function randomNumber(from, to) {
	let randNum = Math.round((Math.random() * (to - from)) + from);
	return randNum;
}

// Create Target class (with method of getAttacked) then initiate school and workplace object
function Target(name, health, destroyStatus) {
	this.name = name;
	this.health = health;
	this.destroyStatus = destroyStatus;

	this.getAttacked = function(attWeap) {
		// Function for checking if we won or lost:
		let checkWinLose = function() {
			if (school.health <= 0 && workplace.health <= 0) {
				targetDestroyed = true;
			} else {
				targetDestroyed = false;
			}
			
			amoOut = true;
			for (let weapon of player.arsenal) {
				if (weapon.amo > 0) {
					amoOut = false;
					break;
				}
			}

			if (targetDestroyed === true) {
				alert('All target destroyed, but you still lose')
			} else if (targetDestroyed !== true) {
				if (amoOut === true) {
					alert("You lose, you've ran out of all the amunitions")
				}
			}
		}

		// Generate attack damage (with some random fluctuation) and attack accuracy:
		let damageVariation = attWeap.damage/10;
		attDam = attWeap.damage + randomNumber(-damageVariation, damageVariation);
		if (attWeap.accuracy >= randomNumber(0, 100)) {
			attAcc = true;
		} else if (attWeap.accuracy < randomNumber(0, 100)) {
			attAcc = false;
		} else {
			attAcc = false; // Just to avoid unexpected behaviors
		}

		// If the target is already destroyed, no attack. 
		// Otherwise, you attack!!
		if (this.destroyStatus == true) {
			alert('The target is already destroyed!');
		} else if (this.destroyStatus == false) {
			// If attack accuracy is false, you missed! 
			// Otherwise, you hit! Your target will lose health
			if (attWeap.amo <= 0) {
				alert("You're out of amo");
			} else if (attWeap.amo > 0) {
				attWeap.amo -= 1
				if (attAcc == false) {
					alert('You missed');
					checkWinLose();
					return; // Break out of the getAttacked function right away
				} else if (attAcc == true) {
					this.health -= attDam;
					// If target's health level drop bellow 0, its destroyed status become true, you cannot hit it next turn. 
					// Otherwise, you can continue attack it
					if (this.health <= 0) {
						this.destroyStatus = true;
					} else if (this.health > 0) {
						this.destroyStatus = false;
					}
					// For changing to different img:
					if (true) {
						// Get different health level to change img
					}
				} else {
					alert('Choose your weapon first!');
				}
			}
		}

		checkWinLose();

		// Console test
		console.log(targetDestroyed, amoOut);
		console.log(this.name, this.health, this.destroyStatus);
		console.log(attWeap.name, attWeap.amo);
	}
}

let school = new Target('School', 4000, false);
let workplace = new Target('Workplace', 3000, false);

// Delay executing the functions so that the animation can be completed before the function's result show up
let schoolAttackFunction = function(attWeap) {
	return school.getAttacked(attWeap);
}

let schoolAttacked = function(attWeap) {
	if (attWeap.amo <= 0 || school.destroyStatus === true) {
		return schoolAttackFunction(attWeap);
	} else if (attWeap.amo > 0) {
		if (attWeap === ak47 || attWeap === machineGun) {
			return setTimeout(schoolAttackFunction, 1000, attWeap);
		} else if (attWeap === grenade) {
			return setTimeout(schoolAttackFunction, 1000, attWeap);
		} else if (attWeap === tomahawk) {
			return setTimeout(schoolAttackFunction, 1000, attWeap);
		}
	}
}

let workplaceAttackFunction = function(attWeap) {
	return workplace.getAttacked(attWeap);
}

let workplaceAttacked = function(attWeap) {
	if (attWeap.amo <= 0 || workplace.destroyStatus === true) {
		return workplaceAttackFunction(attWeap);
	} else if (attWeap.amo > 0)	{
		if (attWeap === ak47 || attWeap === machineGun) {
			return setTimeout(workplaceAttackFunction, 1000, attWeap);
		} else if (attWeap === grenade) {
			return setTimeout(workplaceAttackFunction, 1000, attWeap);
		} else if (attWeap === tomahawk) {
			return setTimeout(workplaceAttackFunction, 1000, attWeap);
		}
	}
}

