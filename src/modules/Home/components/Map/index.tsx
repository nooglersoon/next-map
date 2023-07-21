import { MapContainer, TileLayer,Marker,Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { baliCoordinate } from '@/common/constants/coordinate';
import { spkluList } from '../../../../data/data'

  export interface MapStyleProperies {
    fillColor: string;
    stroke: boolean;
    fillOpacity: number;
  }
  
  export type MapStyle = (feature: any) => MapStyleProperies

const Map = () => {
  return (
    <MapContainer center={[baliCoordinate.lat, baliCoordinate.long]} zoom={10} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
      <TileLayer
            url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
        />
      <GeoJSON key={spkluList.bbox?.[0]} data={spkluList} style={{
       fillColor:'#242424',
       stroke: false,
       fillOpacity: 0.6
      }}/>
    </MapContainer>
  )
}

export default Map