
let attWeap; // The attack's weapon object

function Weapon(name, objectName, damage, originalAmo, amo, accuracy, price, imgUrl, animationTime) {
	this.name = name;
	this.objectName = objectName;
	this.damage = damage;
	this.originalAmo = originalAmo;
	this.amo = amo;
	this.accuracy = accuracy;
	this.price = price;
	this.imgUrl = imgUrl;
	this.animationTime = animationTime;

	this.attack = function() {
		if (this.amo <= 0) {
			soundEmptyReload.pause();
			soundEmptyReload.currentTime = 0;
			soundEmptyReload.play();
			blockField(1800);
			$('.out-of-amo').animate({
				right: 0,
				opacity: 1
			}, 500).delay(800).animate({
				right: '-278px',
				opacity: 0
			});
		} else if (this.amo > 0) {
			attWeap = this;
			// Play sound:
			soundGunReload.pause();
			soundGunReload.currentTime = 0;
			soundGunReload.play();
		}
	}

	this.withdrawAttack = function(school, workplace) {
		if (school.health > 4000 && workplace.health > 4000) {
			return;
		}
		else if ((school.health <= 4000 || workplace.health <= 4000) && (this === tomahawk) && (this.amo > 0)) {
			$('#mercy-1-box').fadeIn(500).delay(5500).fadeOut(1);
		}
	}
}

let ak47 = new Weapon('AK47', 'ak47', 500, 10, 10, 80, 2500, 'static/img/weapons/ak47.png', 300);
let dragunov = new Weapon('Dragunov', 'dragunov', 700, 4, 4, 90, 5500, 'static/img/weapons/dragunov.png', 600);
let mp5 = new Weapon("American spy's gun", 'mp5', 300, 10, 10, 90, 2000, 'static/img/weapons/mp5.png', 300);
let rpg = new Weapon('Russian RPG', 'rpg', 800, 3, 3, 60, 5000, 'static/img/weapons/rpg.png', 2000);
let tomahawk = new Weapon('Tomahawk missile', 'tomahawk', 2000, 1, 1, 60, 10000, 'static/img/weapons/tomahawk.png', 7000);

let weaponArray = [ak47, dragunov, mp5, rpg, tomahawk];