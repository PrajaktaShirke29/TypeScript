import {User} from './User';
import {Company} from './Company';
import {} from 'googlemaps';

const user = new User();
const company = new Company();


new google.maps.Map(document.getElementById('map'), {
    zoom :1,
    center : {
        lat: 0,
        lng: 0
    }
});



