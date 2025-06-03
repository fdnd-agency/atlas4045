<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fdnd-agency/atlas4045">
    <img src="https://github.com/user-attachments/assets/723a654b-2c8a-4d17-bfe2-158f96616757" alt="Logo" width="192" height="95">
  </a>

  <h3 align="center">Atlas 40-45</h3>

  <p align="center">
    4 Mei Comité Oosterparkbuurt
    <br />
    <a href="https://atlas4045.agency.fdnd.nl/"><strong>Live site »</strong></a>
    <br />
    <br />
    <a href="https://atlas4045.dev.fdnd.nl/">Dev site</a>
    &middot;
    <a href="https://github.com/orgs/fdnd-agency/projects/67">Project Board</a>
    &middot;
    <a href="https://github.com/fdnd-agency/atlas4045/issues/new?template=bug_report.yml">Report Bug</a>
    &middot;
    <a href="https://github.com/fdnd-agency/atlas4045/issues/new?template=feature_request.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#importend-data">Importend data</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Main page screenshot](https://github.com/user-attachments/assets/dd64e362-cb19-4d18-939d-2ba46aa7345e)
![Overview page screenshot](https://github.com/user-attachments/assets/a53830e2-51a8-4e02-8eba-1fbfbcb5353d)

This website functions as a supplement to the 'Gedenkposters' campaign of the 4 Mei Comité Oosterparkbuurt. Users can see an overview of all posters on display in the campaign, and see their location on a map. Features such as a filter function, and highlighted poster suggestions on the main page allow users to discover new stories and posters from the Oosterparkbuurt, and easily save or share these stories with others. 

In the future, this website will house the stories of thousands of Jewish people from the Oosterparkbuurt who fell victim to the Holocaust, and allow people to discover their stories through an intuitive interface.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Svelte][Svelte.dev]][Svelte-url]
* [![Directus][Directus.io]][Directus-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Directus.io]: https://img.shields.io/badge/Directus-6644FF?style=for-the-badge&logo=directus&logoColor=white
[Directus-url]: https://directus.io

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/fdnd-agency/atlas4045.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file using `example.env` as a guide.
4. `PROTECTED_PASSWORD` will be the password required to see the site. This is to protect the preview branch
   ```env
   PROTECTED_PASSWORD = ""
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
6. Run local dev server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing
Want to contribute as someone outside of the FDND organisation? Follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

When contributing, make sure to follow the <a href="https://github.com/fdnd-agency/.github/wiki/Conventions"><strong>FDND Conventions »</strong></a>

<!-- IMPORTEND DATA -->
## Importend data
* Figma prototype · <a href="https://www.figma.com/design/bHh40tuxL1RjtEcWVJpZjF/Atlas-40-45?node-id=0-1&t=EaUPwnSQPBKCCWbI-1"><strong>File »</strong></a>
<!-- 
  * Design rationale · *insert design rationale » * 
  * Deskresearch · *insert deskresearch » * 
  * Fieldresearch · *insert fieldresearch » * 
--> 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- TEAM MEMBERS -->
## Team
- Anna-Kyra Strik · <i>Developer</i> · <a href="https://github.com/Anna-Kyra"><strong>Github »</strong></a>
- Robin van der Heijden · <i>Developer</i> · <a href="https://github.com/Robin1224"><strong>Github »</strong></a> 
- Sarah Bouziane Bouziane · <i>Designer</i> · <a href="https://github.com/saarrxb"><strong>Github »</strong></a>
- Cassidy Starke · <i>Designer</i> · <a href="https://github.com/CassidyStarke"><strong>Github »</strong></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* svelte-css-rune library · <a href="https://github.com/JanNitschke/svelte-css-rune"><strong>Github »</strong></a>
* Main site 4 Mei Comité · <a href="https://www.4meioosterpark.nl"><strong>Link »</strong></a>
* Directus · <a href="https://directus.io/docs/"><strong>Docs »</strong></a>
* Directus SDK · <a href="https://directus.io/docs/guides/connect/sdk"><strong>Docs »</strong></a>
* Gitmoji · <a href="https://gitmoji.dev/"><strong>Cheat sheet »</strong></a>
* FDND Conventions · <a href="https://github.com/fdnd-agency/.github/wiki/Conventions"><strong>Link »</strong></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
