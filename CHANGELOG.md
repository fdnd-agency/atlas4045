# Changelog

All notable changes to this project will be documented in this file.

## [0.5.0] - 2024-02-10
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

## [0.4.0] - 2024-02-07
### Added
- Installed Directus SDK
- Added fetch request to overview page
- Used fetched data to display poster cards

### Changed
- Debug element on PosterCard replaced by img


## [0.3.0] - 2024-02-06
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

## [0.2.0] - 2024-02-05
### Added
- Added responsive layout for header
- Added responsive layout for introduction
- Added debug component for when placeholder is needed
- Created reusable nav components


## [0.1.0] - 2024-02-04
### Added
- Added HTML skeleton for overview page
- Added favicon

## [0.0.1] - 2024-02-03
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