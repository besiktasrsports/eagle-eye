Configuration is as easy as creating a JSON file with the fields that your scouting team wants to track.  Some fields are common to all teams and years.  The basic fields are:
* Scouter - who is scouting this robot
* Event - the event that is being scouted
* Level - The level of competition (Qualifications, Double Elimination, Finals, etc)
* Match - the match number that is being scouted
* Robot - Which robot is being scouted (Red-1, Blue-1, etc.)
* Team # - What team is being scouted

User defined fields can be of several different types:
* Text - A freeform text field
* Number - Like text, but restricted to numbers
* Counter - A counter that can be increased or decreased with a click or touch
* Radio Buttons - A single choice between several options (Ball pick up: ()Ground ()Loading Bay ()Both ()None)
* Checkbox - A single on/off or yes/no check box (Exit Start Line?  []Yes if checked)
* Timer - A time counter to count the number of seconds it takes to do something (How long did it take to climb?)
* Cycle Timer - Start the timer and with 1 click track cycle times of robots.  
* Field Image - Using an image of the field, select positions on the field. (Use to record starting point, or shooting locations)

These should cover most of your scouting team's data collection needs.  PWNAGE's 2020 Infinite Recharge configuration file is included as an example.  The import of the configuration file is in index.html and would need to be updated to import a different configuration file. Only import one configuration file.
