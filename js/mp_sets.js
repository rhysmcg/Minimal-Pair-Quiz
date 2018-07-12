//
// List of minimal pair sets used for to load in the dynamic flashcards
// Each set has a name string and id based off two example words in the set
// Underneath is the phonetic symbols used from the two sounds
// The tags are language codes for filtering sounds specific to a language

// Chinese speaker sounds: http://www.doctorsspeakup.com/content/speakers-chinese-languages

mp_sets = {
  "Law - Low":{
	"id":"law_low",
	"symbols":"/ɔː/ and /əʊ/",
	"tags":["ja"],
	"words":[
		["boat","bought"],
  		["coat","caught"],
  		["cold","called"],
  		["woke","walk"],
  		["low","law"],
  		["bowl","ball"],
  		["so","saw"],
  		["poke","pork"],
  		["show","sure"],
  		["snow","snore"],
  		["moaning","morning"],
  		["drone","drawn"],
  		["chose","chores"],
  		["load","lord"],
  		["tone","torn"]
	]
},
  "Very - Berry":{
	"id":"very_berry",
	"symbols":"/v/ and /b/",
	"tags":["ja","es","ko"],
	"words":[
		["very","berry"],
		["vote","boat"],
		["van","ban"],
		["vest","best"],
		["vet","bet"],
		["vow","bow"],
		["volt","bolt"],
		["curve","curb"],
		["vent","bent"]
	]
},
  "Right - Light":{
	"id":"right_light",
	"symbols":"/r/ and /l/",
	"tags":["ja","ko"],
	"words":[
		["right","light"],
		["correct","collect"],
		["reader","leader"],
		["arrive","alive"],
		["grass","glass"],
		["road","load"],
		["rock","lock"],
		["fry","fly"],
		["pray","play"],
		["royal","loyal"],
		["wrist","list"],
		["grammar","glamour"],
		["rain","lane"],
		["rate","late"],
		["crown","clown"]
	]
},
  "Fast - First":{
	"id":"heart_hurt",
	"symbols":"/ɑ:/ and /ɜ:/",
	"tags":["ja"],
	"words":[
		["fast","first"],
		["heart","hurt"],
		["pass","purse"],
		["bath","birth"],
		["farm","firm"],
		["hard","heard"],
		["carve","curve"],
		["dart","dirt"],
		["barn","burn"],
		["star","stir"]
	]
},
  "Back - Bike":{
	"id":"back_bike",
	"symbols":"/æ/ and /aɪ/",
	"tags":["zh"],
	"words":[
		["back","bike"],
		["flat","flight"],
		["parrot","pirate"],
		["van","vine"],
		["tap","type"],
		["strap","stripe"],
		["sand","signed"],
		["salmon","Simon"],
		["sadder","cider"],
		["rat","right"],
		["atom","item"],
		["cat","kite"],
		["dad","died"],
		["fan","fine"],
		["bland","blind"]
	]
},

  "Heart - Height":{
	"id":"heart_height",
	"symbols":"/ɑ:/ and /aɪ/",
	"tags":["zh"],
	"words":[
		["fart","fight"],
		["guard","guide"],
		["Mark","Mike"],
		["spark","spike"],
		["R","I"],
		["park","pike"],
		["laugh","life"],
		["heart","height"],
		["hard","hide"],
		["cart","kite"],
		["Carl","Kyle"]
	]
},

  "Age - Edge":{
	"id":"age_edge",
	"symbols":"/eɪ/ and /e/",
	"tags":["zh", "hk", "mo"],
	"words":[
		["sale", "sell"],
		["bait", "bet"],
		["age", "edge"],
		["saint", "sent"],
		["fail", "fell"],
		["gate", "get"],
		["haven", "heaven"],
		["later", "letter"],
		["main", "men"],
		["paper", "pepper"],
		["raid", "red"],
		["spatial", "special"],
		["taste", "test"],
		["tail", "tell"],
		["wait", "wet"]
	]
},

  "Bag - Bug":{
	"id":"bag_bug",
	"symbols":"/æ/ and /ʌ/",
	"tags":["ja", "zh"],
	"words":[
		["bag","bug"],
		["track","truck"],
		["mad","mud"],
		["campus","compass"],
		["ankle","uncle"],
		["crash","crush"],
		["paddle","puddle"],
		["rash","rush"],
		["match","much"],
		["bank","bunk"],
		["ran","run"],
		["fan","fun"],
		//["hat","hut"],
		["batter","butter"],
		["cat","cut"]
	]
}/*,

// RECORDID until here. Haven't recorded "hat"


  "Boat - Bolt":{
	"id":"boat_bolt",
	"symbols":"/əʊ/ and /əʊl/",
	"tags":["zh"],
	"words":[
		["hose", "holes"],
		["boat", "bolt"],
		["go", "goal"],
		["odor", "older"],
		["row", "roll"],
		["vote", "volt"],
		["code", "cold"],
		["toes", "tolls"],
		["coat", "colt"],
		["sow", "sole"]
	]
},  "Cancel - Cancer":{
	"id":"cancel_cancer",
	"symbols":"/əl/ and /ə/",
	"tags":["zh"],
	"words":[
		["cancel", "cancer"],
		["angle", "anger"],
		["towel", "tower"],
		["loyal", "lawyer"],
		["temple", "temper"],
		["eagle", "eager"],
		["ankle", "anchor"],
		["survival", "survivor"],
		["mental", "mentor"],
		["little", "litter"],
		["title", "tighter"],
		["label", "labour"],
		["final", "finer"],
		["battle", "batter"],
		["shuttle", "shutter"]
	]
},  "Cold - Called":{
	"id":"cold_called",
	"symbols":"/əʊl/ and /ɔːl/",
	"tags":["zh"],
	"words":[
		["cold", "called"],
		["hole", "hall"],
		["stole", "stall"],
		["bowl", "ball"],
		["mole", "mall"],
		["bold", "bald"],
		["toll", "tall"],
		["pole", "Paul"],
		["hold", "hauled"],
		["bowling", "balling"]
	]
},  "Connect - Collect":{
	"id":"connect_collect",
	"symbols":"/n/ and /l/",
	"tags":["zh","hk","mo"],
	"words":[
		["connect", "collect"],
		["nead", "lead"],
		["knock", "lock"],
		["snow", "slow"],
		["winning", "willing"],
		["nap", "lap"],
		["name", "lame"],
		["snap", "slap"],
		["trainer", "trailer"],
		["snack", "slack"],
		["knot", "lot"],
		["neighbour", "labour"],
		["number", "lumber"],
		["unarmed", "alarmed"],
		["spinning", "spilling"]
	]
},  "Fill - Feel":{
	"id":"fill_feel",
	"symbols":"/ɪl/ and /iːl/",
	"tags":["zh"],
	"words":[
		["fill", "feel"],
		["ill", "eel"],
		["will", "wheel"],
		["still", "steel"],
		["hill", "heel"],
		["pillar", "peeler"],
		["mill", "meal"],
		["nill", "kneel"],
		["filling", "feeling"],
		["frilly", "freely"]
	]
},  "Sell - Sale":{
	"id":"sell_sale",
	"symbols":"/el/ and /eɪl/",
	"tags":["zh"],
	"words":[
		["sell", "sale"],
		["fell", "fail"],
		["tell", "tail"],
		["well", "whale"],
		["hell", "hail"],
		["deli", "daily"],
		["bell", "bail"],
		["held", "hailed"],
		["cellar", "sailor"],
		["selling", "sailing"]
	]
},  "World - Word":{
	"id":"world_word",
	"symbols":"/ɜːl/ and /ɜː/",
	"tags":["zh","hk","mo"],
	"words":[
		["world", "word"],
		["hurl", "her"],
		["pearl", "purr"],
		["whirl", "were"],
		["hurled", "heard"]
	] 
}*/

}
