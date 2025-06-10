# Handover | June 2025

## What is the current status of the project?
The first release candidate of the website was completed on May 4, 2025.
This means that the website is live and already in use.
The people who are currently in the system are the Jewish people who fell victim to the Holocaust with a personal poster in the Oosterpark neighborhood.
The main branch contains a live version for all the necessary information that we have now.
The dev branch contains a slightly expanded version intended for the information that is yet to come.

## What are the main features that are already working?
Homepage: 
- Here is an intro piece about what the 4th of May committee is about in the hero section.
- After this is a poster carousel where 5 posters can be seen that are linked to their personal detail page.
This carousel is randomized when it is (re)loaded. Below is a link to the 'Gedenkposters' page.

Gedenkposters:
- Here you can see a map that works completely with the information of the memorial posters that are there now.
- The posters are linked to their personal detail page and have a
- The filter can currently be filtered by name and street (needs to be expanded). The filtered item is linked to the 'Alle adressen met een gedenkposter (63)' sentence, making it dynamic.

Poster detailpage: 
- Poster is displayed
- On the map, the navigation of the poster that is on the page is highlighted. Tacks of the other posters are still visible.

<!--
Branches:
insert welke branches goed zijn om naar te kijken
-->

CMS: 
The CMS is divided into Person, Address, Family and Poster

## What are the biggest concerns or challenges?
In the future, this website will house the stories of thousands of Jewish people from the Oosterparkbuurt who fell victim to the Holocaust,
and allow people to discover their stories through an intuitive interface.
Later, more Jewish Holocaust victims will be added to the system for whom no poster has been made and any stolpersteine ​​(monument stones).
The intention here is that this can be filtered separately.
The intention is therefore to redesign the website in order to be able to process more information in the design.
In the [Figma file](https://www.figma.com/design/bHh40tuxL1RjtEcWVJpZjF/Atlas-40-45?node-id=0-1&t=EaUPwnSQPBKCCWbI-1) a start has already been made by the CMD students.
So make sure this is looked at. No additional information has been given to us yet, but we do know that this is coming.
It is useful to discuss this with the client.

The live link for now is 'atlas4045.agency.fdnd.nl' for now. It's good to look for a custom sub-domain so FDND Agency isn't mentioned.

Filter:
- You can currently only filter on names and streets, this als need to include to following: name, adress, stolpersteine and theme (certain events).
- The text input doesn't have feedback/autocomplete yet, this is nice to have.


## What is recommended as a first step for the next team?
Focus om de redesign over te zetten in code.
Er komt ook meer informatie, goed om dit te bespreken met de opdrachtgever.

<!--
Branches:
insert welke branches goed zijn om naar te kijken
-->

### Handige issues om naar te kijken:
- [FEATURE]: Show submit button when focused · <a href="https://github.com/fdnd-agency/atlas4045/issues/299"><strong>Link »</strong></a>
- [FEATURE]: Add subtle gradient to filter mobile layout, to better convey to user that filters are scrollable · <a href="https://github.com/fdnd-agency/atlas4045/issues/298"><strong>Link »</strong></a>
- [FEATURE]: Add breadcrumb or go back button to detail page · <a href="https://github.com/fdnd-agency/atlas4045/issues/247"><strong>Link »</strong></a>
- [FEATURE]: Go to top button · <a href="https://github.com/fdnd-agency/atlas4045/issues/297"><strong>Link »</strong></a>

