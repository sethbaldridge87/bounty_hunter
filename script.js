$(document).ready(function(){
	function Planet(name,image,loc1,loc2,loc3,description){
		this.name = name;
		this.image = image;
		this.loc1 = loc1;
		this.loc2 = loc2;
		this.loc3 = loc3;
		this.description = description;
	}
	var Tatooine = new Planet('Tatooine','images/tatooine_main.jpeg','Cantina','Junkyard','Podracer Garage','A harsh desert planet in the Outer Rim controlled by the Hutt clans. The planet also serves as the home of the Boonta Eve Classic Podrace, as well as the hideout for many nefarious criminals.');
	var Bespin = new Planet('Bespin','images/bespin_main.jpeg','Scrapyard','Administrative Center','Docking Platform','A gaseous planet with an economy that revolves around precious gas mining. The most well-known gas mining facility is Cloud City. The gases are produced by giant creatures called Aiwha.');
	var Jedha = new Planet('Jedha','images/jedha_main.jpeg','Monastery','Bazaar','Cantina','A desert planet chilled by a permanent winter, Jedha was home to the first civilization to show interest in the nature of the Force. During the Galactic Civil War the planet was devastated by an attack from the newly developed Death Star.');
	var Kashyyyk = new Planet('Kashyyyk','images/kashyyyk_main.jpeg','Treehouse','Market','Farmhouse','A densely forested planet famous for its enormous Wroshyr trees. The planet is populated by the Wookies, who implement sophisticated technology into the trees to make their homes.');
	var NalHutta = new Planet('Nal Hutta','images/nalhutta_main.jpeg','Casino','Cantina','Black Market','A marshy bog planet with a hot atmosphere and greasy rain. Known as a center for criminal activity, the planet is primarily controlled by the Hutt clans. The planet is also home to many dangerous creatures.');
	var Felucia = new Planet('Felucia','images/felucia_main.jpeg','Farmhouse','Market','Stables','A jungle planet filled with various kinds of fungal and plant life. Many creatures such as the jungle rancor can be found here. The diverse landscape provides an abundance of crops to be harvested by the planet\'s many farming villages.');
	var planets = [Tatooine,Bespin,Jedha,Kashyyyk,NalHutta,Felucia];
	var numberOfPlanets = planets.length;
	var randomPlanet;
	var currentPlanet;
	var nextPlanet;
	// Initial setup
	console.log(planets);
	$('#investigate').html('');
	$('#spaceport').html('');
	randomPlanet = Math.floor((Math.random() * numberOfPlanets));
	currentPlanet = planets[randomPlanet];
	console.log("Current planet is " + currentPlanet.name);
	$('#main_screen').html('<img src="' + currentPlanet.image + '" alt="' + currentPlanet.name + '">');
	$('#main_text p').text(currentPlanet.description);
	$('#map p').text(currentPlanet.name);
	$('#investigate').append('<p>' + currentPlanet.loc1 + '</p><p>' + currentPlanet.loc2 + '</p><p>' + currentPlanet.loc3 + '</p>');
	planets.splice(randomPlanet, 1);
	for(var i = 0; i < planets.length; i++) {
		$('#spaceport').append('<p data-role="' + planets[i].name + '">' + planets[i].name + '</p>');
	}
	numberOfPlanets = planets.length;
	randomPlanet = Math.floor((Math.random() * numberOfPlanets));
	nextPlanet = planets[randomPlanet];
	console.log("Next planet is " + nextPlanet.name);
	
	function setUp(){
		console.log(planets);
		$('#investigate').html('');
		$('#spaceport').html('');
		randomPlanet = Math.floor((Math.random() * numberOfPlanets));
		currentPlanet = nextPlanet;
		console.log("Current planet is " + currentPlanet.name);
		$('#main_screen').html('<img src="' + currentPlanet.image + '" alt="' + currentPlanet.name + '">');
		$('#main_text p').text(currentPlanet.description);
		$('#map p').text(currentPlanet.name);
		$('#investigate').append('<p>' + currentPlanet.loc1 + '</p><p>' + currentPlanet.loc2 + '</p><p>' + currentPlanet.loc3 + '</p>');
		planets.splice(randomPlanet, 1);
		for(var i = 0; i < planets.length; i++) {
			$('#spaceport').append('<p data-role="' + planets[i].name + '">' + planets[i].name + '</p>');
		}
		numberOfPlanets = planets.length;
		randomPlanet = Math.floor((Math.random() * numberOfPlanets));
		nextPlanet = planets[randomPlanet];
		console.log("Next planet is " + nextPlanet.name);
	}
	$('#spaceport p').on('click', function(){
		console.log("Destination clicked");
		var destination = $(this).attr('data-role');
		console.log(destination);
		if (destination === nextPlanet.name) {
			console.log("Correct!");
			setUp();
		} else {
			console.log("Incorrect!");
			setUp();
		}
	});
});