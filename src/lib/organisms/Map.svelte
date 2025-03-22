<script>
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
          iconSize: [40, 40]
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
    }

    section.js-enabled {
      display:block;
    }

    div {
      height:60vh;
    }
</style>
