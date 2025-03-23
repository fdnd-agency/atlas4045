<!-- <script>
  import { onMount, onDestroy } from 'svelte';

  let { mapAddresses, javascriptEnabled } = $props();

  let mapElement = $state(null);
  let map = $state(null);

  onMount(async () => {
      const leaflet = await import('leaflet');
      
      const mapStyle = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
      const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const initialView = [52.35846685, 4.91372582947583];
      const initialZoom = 15;
      
      map = leaflet.map(mapElement).setView(initialView, initialZoom);

      leaflet.tileLayer(mapStyle, {
          attribution
      }).addTo(map);

      mapAddresses.forEach((marker) => {
        const popUpInfo = `<strong>${marker.street}</strong> ${marker.house_number} ${marker.floor ?? ''} ${marker.addition ?? ''}`;

        const customIcon = leaflet.icon({
          iconUrl: '/assets/icons/marker.svg',
          iconSize: [20, 20]
        });

        leaflet
          .marker(marker.map.coordinates.reverse(), { icon: customIcon })
          .addTo(map)
          .bindPopup(popUpInfo);
      });
  });

    onDestroy(async () => {
      if(map) {
          console.log('Unloading map from memory.');
          map.remove();
      }
    });
</script> -->

<script>
  import { onDestroy, onMount } from 'svelte';
  import { tick } from 'svelte';
  
  let { mapAddresses, javascriptEnabled } = $props();
  let mapElement = $state(null);
  let map = $state(null);
  let markers = [];
  let leaflet = $state(null); 

  async function initializeMap() {
    leaflet = await import('leaflet');


    const mapStyle = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const initialView = [52.35846685, 4.91372582947583];
    const initialZoom = 15;

    map = leaflet.map(mapElement).setView(initialView, initialZoom);

    leaflet.tileLayer(mapStyle, {
      attribution
    }).addTo(map);

    updateMarkers();
  }

  function updateMarkers() {
    if (!map) return;

    // Remove existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Add new markers
    mapAddresses.forEach((marker) => {
      const popUpInfo = `<strong>${marker.street}</strong> ${marker.house_number} ${marker.floor ?? ''} ${marker.addition ?? ''}`;

      const customIcon = leaflet.icon({
        iconUrl: '/assets/icons/marker.svg',
        iconSize: [20, 20]
      });

      const newMarker = leaflet
        .marker([...marker.map.coordinates].reverse(), { icon: customIcon })
        .addTo(map)
        .bindPopup(popUpInfo);

      

      markers.push(newMarker);
    });
    console.log('Updating markers', markers);
  }

  onMount(async () => {
    await initializeMap();
  });

  $effect(() => {
    updateMarkers(); // Runs whenever mapAddresses changes
  });

  onDestroy(() => {
    if (map) {
      console.log('Unloading map from memory.');
      map.remove();
    }
  });
</script>

<section class={{ 'js-enabled': javascriptEnabled}}>
  <h2 class="sr-only">Adressen op de kaart</h2>
  
  <div bind:this={mapElement}></div>
</section>
<style>
    @import 'leaflet/dist/leaflet.css';
    section {
      display:none;
      margin: -.75rem calc(-1* var(--page-padding)) var(--spacing-md);
      width: calc(100% + 2* var(--page-padding));
      position: relative;
      z-index:1;
      border-bottom:5px solid var(--blue-300);
    }

    section.js-enabled {
      display:block;
    }

    div {
      height:60vh;
    }
</style>
