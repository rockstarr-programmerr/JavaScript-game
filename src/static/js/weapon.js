
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
			alert("You've ran out of amo");
		} else if (this.amo > 0) {
			attWeap = this;
			console.log(attWeap);
		}
	}
}

let ak47 = new Weapon('AK47', 'ak47', 500, 10, 10, 80, 2500, 'static/img/weapons/ak47.png', 300);
let dragunov = new Weapon('Dragunov', 'dragunov', 700, 4, 4, 90, 5500, 'static/img/weapons/dragunov.png', 600);
let mp5 = new Weapon("American spy's gun", 'mp5', 300, 10, 10, 90, 2000, 'static/img/weapons/mp5.png', 300);
let rpg = new Weapon('Russian RPG', 'rpg', 800, 3, 3, 60, 5000, 'static/img/weapons/rpg.png', 2000);
let tomahawk = new Weapon('Tomahawk missile', 'tomahawk', 2000, 1, 1, 60, 10000, 'static/img/weapons/tomahawk.png', 6000);

