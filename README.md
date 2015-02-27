CMP237 Collin Mullis
MLG Dataset Project

This code is intended to provide a number of examples of the use of the various array functions when applied to a real-world dataset.

The dataset I have chosen to use for this project, is MLG player statistics. The players all of certain attributes that are recorded after each game and match that their teams play. These include but are not limited to, Kill Death Ratio (KDR), Captures per game, Defends per game, Kills during game, etc..

Here are a couple of example entries from my dataset:

{ "team": "OpTic Gaming", "player": "Nadeshot", "kd": 0.92, "kdperc": 50, "slayer": 24.55, "maps":15},
{ "team": "Denial", "player": "Attach", "kd": 0.90, "kdperc": 0.90, "slayer": 26.20, "maps": 23},

The repo contains these code examples, among other things:

Routine to read a single data item from terminal and print it in object format
Routine to continuously read data items until user hits ENTER for first field
Sample filter looking for players with a KD of 1.00+
Sample filter looking for players of a certain Team
Sample showing mapping to only players with a kdperc of lower than 50
MLG Dataset

*README.md file changed from Brian Capouch's original README.md file*
