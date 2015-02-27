/* Coded by Collin Mullis
	CMP237 Dataset Project
	February 18th 2015
*/
// Code keeps track of Team Name, Player Name, Kill Death Ratio, Kill Death Percentile, Slayer (Kills per minute *10), and Maps won.
var mlgstats = [
'{ "team": "OpTic Gaming", "player": "Scumpii", "kd": 1.29, "kdperc": 1, "slayer": 34.82, "maps": 15}',
'{ "team": "OpTic Gaming", "player": "Formal", "kd": 1.27, "kdperc": 10, "slayer": 32.04, "maps": 15}',
'{ "team": "OpTic Gaming", "player": "Crimsix", "kd": 1.09, "kdperc": 25, "slayer": 28.45, "maps": 15}',
'{ "team": "OpTic Gaming", "player": "Nadeshot", "kd": 0.92, "kdperc": 50 "slayer": 24.55", "maps":15}',
'{ "team": "Denial", "player": "Attach", "kd": 0.90, "kdperc": 0.90, "slayer": 26.20, "maps": 23}',
'{ "team": "Denial", "player": "Jkap", "kd": 1.01, "kdperc": 40, "slayer": 27.09, "maps": 23}',
'{ "team": "Denial", "player": "Clayster", "kd": 1.14, "kdperc": 20, "slayer": 30.87, "maps": 23}',
'{ "team": "Denial", "player": "Replays", "kd": 0.92, "kdperc": 50, "slayer": 24.18, "maps": 23}',
'{ "team": "Rise", "player": "Sender", "kd": 0.87, "kdperc": 50, "slayer": 26.76, "maps": 7}',
'{ "team": "Rise", "player": "Chino", "kd": 0.95, "kdperc": 50, "slayer": 31.29, "maps": 7}',
'{ "team": "Rise", "player": "Diabolic", "kd": 0.82, "kdperc": 50, "slayer": 22.64, "maps": 7}',
'{ "team": "Rise", "player": "Pacman", "kd": 0.67, "kdperc": 50, "slayer": 21.41, "maps": 7}',
'{ "team": "EnVyUs", "player": "Nameless", "kd": 1.04, "kdperc": 30, "slayer": 27.39, "maps": 13}',
'{ "team": "EnVyUs", "player": "Saints", "kd": 1.16, "kdperc": 15, "slayer": 30,63, "maps": 13}',
'{ "team": "EnVyUs", "player": "Zooma", "kd": 1.00, "kdperc": 45, "slayer": 28.63, "maps": 13}',
'{ "team": "EnVyUs", "player": "Merk", "kd": 0.78, "kdperc": 50, "slayer": 22.48, "maps": 13}',
'{ "team": "FaZe", "player": "Aches", "kd": 0.84, "kdperc": 50, "slayer": 22.66, "maps": 16}',
'{ "team": "FaZe", "player": "Parasite", "kd": 1.01, "kdperce": 35, "slayer": 24.98, "maps": 16}',
'{ "team": "FaZe", "player": "Enable", "kd": 1.18, "kdperc": 10, "slayer": 28.98, "maps": 16}',
'{ "team": "FaZe", "player": "Slasher", "kd": 1.28, "kdperc": 5, "slayer": 30.42, "maps": 16}',
];
console.log(mlgstats); 
