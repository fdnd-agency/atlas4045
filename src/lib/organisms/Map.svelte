<script>
  import { onDestroy, onMount } from 'svelte';
  import { tick } from 'svelte';
  import { javascript } from '$lib/utils/javascriptEnabled.svelte.js';

  let { mapAddresses, activeMapAddresses = [], mapClass = "", initialZoom = 15, initialView = [52.35846685, 4.91372582947583] } = $props();
  let mapElement = $state(null);
  let map = $state(null);
  let markers = [];
  let leaflet = $state(null); 
  

  async function initializeMap() {
    leaflet = await import('leaflet');

    const mapStyle = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    map = leaflet.map(mapElement).setView(initialView, initialZoom);

    leaflet.tileLayer(mapStyle, {
      attribution
    }).addTo(map);

    updateMarkers();
  }

  function updateMarkers() {
    if (!map) return;

    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    mapAddresses.forEach((marker) => {
      const popup = new L.popup({});

      popup.setContent(`<div style="width: 100px;"><p><strong>${marker.street}</strong> ${marker.house_number} ${marker.floor ?? ''} ${marker.addition ?? ''}</p><img style="width: 100%; margin-bottom: 0.75rem;" src="https://fdnd-agency.directus.app/assets/${marker.poster.covers[0].directus_files_id.id}" alt="Afbeelding van ${marker.street} ${marker.house_number} ${marker.floor ?? ''} ${marker.addition ?? ''}"><a href="/adressen/${marker.id}" data-sveltekit-reload>Bekijk poster</a></div>`);
      
      const customIcon = leaflet.icon({
        iconUrl: (activeMapAddresses ? '/assets/icons/marker-inactive.svg' : '/assets/icons/marker.svg'),
        iconSize: [20, 20]
      });

      const newMarker = leaflet
        .marker([...marker.map.coordinates].reverse(), { 
          icon: customIcon
        })
        .addTo(map)
        .bindPopup(popup);
        
      markers.push(newMarker);
    });

    activeMapAddresses.forEach((marker) => {
      const popup = new L.popup({});

      popup.setContent(`<div style="width: 100px;"><p><strong>${marker.street}</strong> ${marker.house_number} ${marker.floor ?? ''} ${marker.addition ?? ''}</p><img style="width: 100%; margin-bottom: 0.75rem;" src="https://fdnd-agency.directus.app/assets/${marker.poster.covers[0].directus_files_id.id}" alt="Afbeelding van ${marker.street} ${marker.house_number} ${marker.floor ?? ''} ${marker.addition ?? ''}"><a href="/adressen/${marker.id}" data-sveltekit-reload>Bekijk poster</a></div>`);
      
      const customIcon = leaflet.icon({
        iconUrl: '/assets/icons/marker-active.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 30],
      });

      const newMarker = leaflet
        .marker([...marker.map.coordinates].reverse(), { 
          icon: customIcon,
          zIndexOffset: 10000 
        })
        .addTo(map)
        .bindPopup(popup);
        
        markers.push(newMarker);
    });

  }


  onMount(async () => {
    await initializeMap();
  });

  $effect(() => {
    updateMarkers();
  });

  onDestroy(() => {
    if (map) map.remove();
  });
</script>

<section class={{ 'js-enabled': javascript.enabled, 'map': true}}>
  <h2 class="sr-only">Adressen op de kaart</h2>
  
  <div bind:this={mapElement} class={mapClass}></div>
</section>
<style>
    @import 'leaflet/dist/leaflet.css';
    section {
      display: none;
      width: 100%;
      position: relative;
      z-index: 1;
    }

    section.js-enabled {
      display: block;
    }

    div {
      height: 60vh;
    }
</style>
