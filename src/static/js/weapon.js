
let attWeap; // The attack's weapon object

function Weapon(name, objectName, damage, originalAmo, amo, accuracy, price, imgUrl) {
	this.name = name;
	this.objectName = objectName;
	this.damage = damage;
	this.originalAmo = originalAmo;
	this.amo = amo;
	this.accuracy = accuracy;
	this.price = price;
	this.imgUrl = imgUrl;

	this.attack = function() {
		if (this.amo <= 0) {
			alert("You've ran out of amo");
		} else if (this.amo > 0) {
			attWeap = this;
			console.log(attWeap);
		}
	}
}

let ak47 = new Weapon('AK-47', 'ak47', 500, 10, 10, 80, 2500, 'static/img/weapons/ak47.png';
let dragunov = new Weapon('Dragunov', 'dragunov', 700, 4, 4, 90, 5500, 'static/img/weapons/dragunov.png');
let machineGun = new Weapon('Machine gun', 'machineGun', 300, 10, 10, 90, 2000, 'static/img/weapons/mp5.png');
let grenade = new Weapon('Grenade', 'grenade', 800, 3, 3, 60, 5000, 'static/img/weapons/rpg.png');
let tomahawk = new Weapon('Tomahawk missile', 'tomahawk', 2000, 1, 1, 60, 10000, 'static/img/weapons/tomahawk.png');

