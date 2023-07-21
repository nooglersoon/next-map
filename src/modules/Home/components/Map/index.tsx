import { MapContainer, TileLayer, GeoJSON, Marker, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { spkluList } from '../../../../data/data'
import L from 'leaflet';

export type MapProps = {
  lat: number
  long: number
  zoom: number
}

const Map = ({ lat, long, zoom }: MapProps) => {

  const svgIcon = L.divIcon({
    html: `
    <svg width="800px" height="800px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" fill="#ffb43f">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<defs>

<style>.cls-1{fill:#fecb3e;}.cls-2{fill:none;}</style>

</defs>

<title>charging-station--filled</title>

<path class="cls-1" d="M29,7V4H27V7H26v6h1V24.5a1.5,1.5,0,0,1-3,0V16a1,1,0,0,0-1-1H19V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V26H2v2H21V26H19V17h3v7.5a3.5,3.5,0,0,0,7,0V13h1V7ZM11.8574,21.5146l-1.7148-1.0292L12.2339,17h-5l3.9087-6.5146,1.7148,1.0292L10.7661,15h5Z"/>

<polygon id="inner-path" class="cls-2" points="11.857 21.514 10.143 20.486 12.234 17 7.234 17 11.143 10.486 12.857 11.514 10.766 15 15.766 15 11.857 21.514"/>

<rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-2" width="32" height="32"/>

</g>

</svg>
    `,
    className: "svg-icon",
    iconSize: [24, 40],
    iconAnchor: [12, 40]
  });

  return (
    <MapContainer
      center={[lat, long]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
      />
      <GeoJSON key={spkluList.bbox?.[0]} data={spkluList}
        onEachFeature={(geo) => {
          const geom: GeoJSON.GeoJsonProperties = geo.geometry;
          return <Circle center={geom.properties} radius={10} />
        }}
      />
    </MapContainer>
  )
}

export default Map