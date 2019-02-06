$(document).ready(function(){
	//Shuffle function
	Array.prototype.shuffle = function() {
		var input = this;

		for (var i = input.length-1; i >=0; i--) {

			var randomIndex = Math.floor(Math.random()*(i+1)); 
			var itemAtIndex = input[randomIndex]; 

			input[randomIndex] = input[i]; 
			input[i] = itemAtIndex;
		}
		return input;
	};
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
	var Kamino = new Planet('Kamino','images/kamino_main.jpeg','Cloning Lab','Power Plant','Landing Platform','A rainy planet covered in endless oceans, Kamino is an Outer Rim world that exports clones. During the Clone Wars, Kamino served as the Republic\'s main supplier of clone troopers.');
	var Naboo = new Planet('Naboo','images/naboo_main.jpeg','Royal Palace','Bazaar','Ferry Docks','A planet near the border of the Outer Rim that is inhabited by humans called the Naboo and the indigenous amphibian creatures the Gungans. The cities are constructed with classical architecture.');
	var Krownest = new Planet('Krownest','images/krownest_main.jpeg','Wren Stronghold','Barracks','Mandalorian Camp','A frigid planet covered in snow and mountains. Krownest is controlled by the Mandalorians, and is goverened by the powerful Wren Clan. Their stronghold is a complex blend of steel, stone and glass.');
	var Kessel = new Planet('Kessel','images/kessel_main.jpeg','Processing Plant','Mine Shaft','Security Center','A noxious mining world where criminals are often sentenced to work in the spice mines. The planet is also a major exporter of unrefined coaxium, a valuable fuel source for starships.');
	
	// Global variables
	var planets = [Tatooine,Bespin,Jedha,Kashyyyk,NalHutta,Felucia,Kamino,Naboo,Krownest,Kessel];
	planets = planets.shuffle();
	var numberOfPlanets = planets.length;
	var randomPlanet = Math.floor(Math.random() * numberOfPlanets);
	var currentPlanet = planets[randomPlanet];
	var selectedPlanet;
	var unusedPlanets = [];
	var deprecatedPlanets = [];
	var availablePlanets = [];
	console.log(availablePlanets);
	console.log(planets[randomPlanet]);
	
	// Initial setup
	$('#investigate').html('');
	$('#investigate').append('<h5>Investigate</h5><hr>');
	$('#spaceport').html('');
	$('#spaceport').append('<h5>Spaceport</h5><hr>');
	$('#main_screen').html('<img src="' + currentPlanet.image + '" alt="' + currentPlanet.name + '">');
	$('#main_text p').text(currentPlanet.description);
	$('#map p').text(currentPlanet.name);
	$('#investigate').append('<p>' + currentPlanet.loc1 + '</p><p>' + currentPlanet.loc2 + '</p><p>' + currentPlanet.loc3 + '</p>');
	planets.splice(randomPlanet, 1);
	console.log(planets);
	for(var i = 0; i < 3; i++) {
		availablePlanets.push(planets[i]);
		$('#spaceport').append('<p data-role="' + planets[i].name + '">' + planets[i].name + '</p>');
	}
	console.log("Available planets are: ");
	console.log(availablePlanets);
	numberOfPlanets = availablePlanets.length;
	randomPlanet = Math.floor(Math.random() * numberOfPlanets);
	var nextPlanet = availablePlanets[randomPlanet];
	console.log("Next planet is " + nextPlanet.name);
	
	
	
	// Function that changes planets
	function setUp(selection){
		for (var i = 0; i < planets.length; i++) {
			if (planets[i].name === selection) {
				selectedPlanet = planets[i];
				planets.splice(i, 1);
			} else {

			}
		}
		numberOfPlanets = planets.length;
		planets = planets.shuffle();
		randomPlanet = Math.floor(Math.random() * numberOfPlanets);
		nextPlanet = planets[randomPlanet];
		console.log("Next planet is " + nextPlanet.name);
		currentPlanet = selectedPlanet;
		$('#investigate').html('');
		$('#spaceport').html('');
		$('#spaceport').append('<h5>Spaceport</h5><hr>');
		$('#investigate').append('<h5>Investigate</h5><hr>');
		$('#main_screen').html('<img src="' + currentPlanet.image + '" alt="' + currentPlanet.name + '">');
		$('#main_text p').text(currentPlanet.description);
		$('#map p').text(currentPlanet.name);
		$('#investigate').append('<p>' + currentPlanet.loc1 + '</p><p>' + currentPlanet.loc2 + '</p><p>' + currentPlanet.loc3 + '</p>');
		for(var y = 0; y < planets.length; y++) {
			$('#spaceport').append('<p data-role="' + planets[y].name + '">' + planets[y].name + '</p>');
		}
	}
	// Upon player click
	$(document).on('click', '#spaceport p',function(){
		var destination = $(this).attr('data-role');
		if (destination === nextPlanet.name) {
			console.log("Correct!");
			setUp(destination);
		} else {
			console.log("Incorrect!");
			setUp(destination);
		}
	});
});