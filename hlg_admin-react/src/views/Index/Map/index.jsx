import {Map, Marker, NavigationControl,ZoomControl , MapTypeControl} from 'react-bmapgl';
import './index.scss';

const MyMap = () => {
    return (
        <Map enableScrollWheelZoom style={{height:800}} center={{lng: 116.402544, lat: 39.928216}} zoom="11">
            <Marker position={{lng: 116.402544, lat: 39.928216}} />
            <NavigationControl /> 
            <ZoomControl/>
            <MapTypeControl/>
            {/* <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/> */}
        </Map>
    );
};

export default MyMap;