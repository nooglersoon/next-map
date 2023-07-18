import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer center={[-8.650000,115.216667]} zoom={10} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
      <Marker 
      position={[-8.650000,115.216667]}
      draggable={true}
      >
        <TileLayer
            url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
        />
        <Popup>
          Hey ! you found me
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map