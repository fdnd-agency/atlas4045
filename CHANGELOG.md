# Changelog

All notable changes to this project will be documented in this file.

## [0.17.0] - 2025-03-12
### Added
- Improved map display on detail page
- Improved filter styling
- Improved user experience on the filter search


## [0.16.0] - 2025-03-12
### Added
- Linked PosterCard to detail pages
- Created non-js version of mobile nav
- Started on mobile nav menu (WIP)

### Changed
- Changed route for details page to use id

## [0.15.0] - 2025-03-11
### Added
- Added some more font sizes to global.css
- Finished desktop layout on landing page

## Changed
- Changed system for padding on pages

## [0.14.0] - 2025-03-10
### Added
- Installed svelte/enhanced-image
- Created first iteration of mobile landing page
- Added simple error page
- Button can now accept CSS rune
- Added highlighted stories to landing page
- Added some more font sizes to global.css

## Changed
- Changed PosterCard hover

## Fixed
- Fixed viewport scaling in chrome devtools

## [0.13.0] - 2025-03-07
### Added
- Transition animations when filtering
- Improved focus state on NavItem
- Filter button now shows on focus, to avoid focus seemingly disappearing when it's focused while hidden
- Improved zero state on overview grid
- Search terms now persist in searchbars through refresh

## Changed
- Naam search placeholder is more intuitive
- Font is changed on PosterCard name
- getCurrentPage is now a default export
- toRoman is now a utils import
- Gap on overview grid tweaked slightly
- Hover state on PosterCard made more subtle

## Fixed
- Fixed logout button styling
- Fixed landscape posters in overview
- Fixed focus-ring using deprecated variable names


## [0.12.0] - 2025-03-06
### Added
- Clearer styling on active NavItem
- New title h2 on overview page
- Redesigned FilterCard to be more compact and take up only one line
- Added functionality for searching by name along with street

## Changed
- Renamed Search to FilterNaam
- Tweaked saturation on brown colour
- Removed PosterIntroductie
- Made the placeholders in the search bars more descriptive

## Fixed
- Fixed missing padding on pages
- Removed old dead imports
- Fixed search form redirecting to index rather than overview
- Fixed button styling using old variable names
- Fixed text input styling using old variable names

## [0.11.0] - 2025-03-05
### Added
- Added new Fruances serif font for titles and large text
- Added new ColourTester devtool to quickly see all colours in the palette. Useful for picking colours when developing
- Added redesigned Header component
- Added (placeholder) landing page
- Added functional navigation
- Added extra design tokens for spacing and font families


## Changed
- Colour palette has been replaced by a more structured palette with more colours
- Nav is now inside Header rather than below
- Overview page is now at `/posters` route.
- `/poster` route has been renamed to `/posters`
- Index page is now a (placeholder) landing page
- Span in Nav is now an H1

## [0.10.0] - 2025-03-03
### Added
- Added functionality to filter component
- Progressively enhanced filter component for when JS is enabled
- Added suspense boundary to PostersOverview (WIP)
- Made submit button on filter hidden when JS is enabled
- Added filter options to fetch query using search params in URL
- Added opaque background to logout button
- Button component can now render submit buttons without needing an onclick prop

## Changed
- Changed +page.server.js to +page.js to allow clientside navigation to refire load function
- Refactored query fields to be seperate const variable
- Moved Loader out of PostersFilter
- Removed some dead code from PostersFilter

## Fixed
- Fixed page data not being reactive
- Fixed hooks.server.js no longer serialising headers

## [0.9.0] - 2025-02-24
### Added
- Added basic setup for detail page
- Added FilterStraat component
- Bubbled onchange event from FilterStraat and FilterBewoners to parent
- Added TextDropdownInput component for text input with dropdown list

## Changed
- Changed import name of image component in PosterCard
- Label text inside filter cards is now centered

## Fixed
- Fixed error handling on missing poster covers

## [0.8.0] - 2025-02-13
### Added
- Added svelte-css-rune as dev dependency & preprocessor
- Added $css rune to Search
- Added $css runes to TextInput
- Added reusable, accessible custom checkbox component
- Added "Bewoners" section to Filters
- Added change event handler to Filters
- Added Loader component
- Added reusable FilterCard component for filter subsections

### Changed
- Lowered chroma on brown colour
- Filters is now a collapsible `<details>` element (progressive disclosure)
- Moved PostersFilter to `/organisms`

### Fixed
- Fixed missing pointer styles for Button
- Fixed font styling in Button
- Fixed vertical alignment on Search

## [0.7.0] - 2025-02-12
### Added
- Added reusable TextInput component
- Added new functionality to Button component, can now also render `<button>` instead of `<a>`
- Added type checking on Button onclick to better prevent errors
- Added functionality for Button to accept rest props, i.e. to add a type attribute
- Added Search component
- Added Filter component (wip)
- Added Screenreader-only utility class

### Changed
- Renamed LinkButton to Button
- Slightly changed the text on PosterCard

### Fixed
- Fixed broken error handling on missing poster covers

## [0.6.0] - 2025-02-11
### Added
- Added another layer of error handling to PostersOverview
- Created more consistent colour palette

### Changed
- Refactored HSL colour palette to OKLCH
- Refactored components to use new colour palette names

## Fixed
- Fixed broken fetch request due to API changes

## [0.5.0] - 2025-02-10
### Added
- Added focus style utility class
- Added no-focus utility class for hiding default focus styling
- Added focus styles on PosterCard
- Added focus styles on NavItem
- Added improved error handling to data fetch logic
- Added error state to PostersOverview
- Added capability for LinkButton to accept rel and title props
- Added Google font Nunito
- Added DirectusImage component which automatically optimises images
- Added fallback image to DirectusImage for when no image is given
- Added lazy loading on PosterCard images

### Changed
- LinkButton anchors in header now have rel and title property
- Applied Google font Nunito on entire page
- PosterCard now uses DirectusImage to render its img element

## [0.4.0] - 2025-02-07
### Added
- Installed Directus SDK
- Added fetch request to overview page
- Used fetched data to display poster cards

### Changed
- Debug element on PosterCard replaced by img


## [0.3.0] - 2025-02-06
### Added
- Added eager loading rule to logo for improved performance
- Added hover styling to LinkButton component
- Added design tokens to global.css
- Added colour palette to global.css
- Added placeholder sans-serif font
- Added dummy data to be used until CMS is up
- Added some tasks to project board based on CodeRabbit feedback

### Changed
- Cleaned up some dead code from Debug component
- Debug component now uses colours from colour palette
- LinkButton styling now uses design tokens instead of magic numbers
- All text now:
  - Uses placeholder font 
  - Has line-height set to 1.2
  - Uses the dark brown palette colour
- Cleaned up global.css structure
- Changed Nav styling to be more consistent between layouts
- Changed some introduction styling to flow better between layouts
- Moved .full-width utility class from LinkButton.svelte to global.css

### Fixed
- Fixed imports in +page.svelte not using the right path

## [0.2.0] - 2025-02-05
### Added
- Added responsive layout for header
- Added responsive layout for introduction
- Added debug component for when placeholder is needed
- Created reusable nav components


## [0.1.0] - 2025-02-04
### Added
- Added HTML skeleton for overview page
- Added favicon

## [0.0.1] - 2025-02-03
### Added
- Created project board
  - Added MoSCoW tags
  - Added timeline view using date tags
  - Added iteration tags based on sprints
  - Added list view grouped by status and sorted by MoSCoW priority


### Changed
- Redid SvelteKit scaffolding to update dependencies

</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>

## [Template]
### Added
- Feature description

### Changed
- Modification description

### Fixed
- Bug fix description