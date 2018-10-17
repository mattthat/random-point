# random-point

An npm for generating random points inside a bounding box

```
npm install random-point
```


10 random places near New Jersey:

```
# foo.js
const pointer = require('random-point')

for(let i =0; i<= 10; i++) {

 const place = pointer([
   -75.5633926391602, 38.7887535095215,
   -73.8850555419922,41.3574256896973], 8);

 console.log({ latitude: place.y,
               longitude: place.x })
}

```

```
$ node foo.js
{ latitude: 39.211214, longitude: -74.02599125 }
{ latitude: 39.40297429, longitude: -73.9205112 }
{ latitude: 40.01724155, longitude: -74.4300817 }
{ latitude: 38.8110183, longitude: -74.90922792 }
{ latitude: 39.46027761, longitude: -74.62615852 }
{ latitude: 40.21198503, longitude: -74.14295735 }
{ latitude: 40.66771901, longitude: -74.10871055 }
{ latitude: 39.08033099, longitude: -74.77854009 }
{ latitude: 39.22134728, longitude: -74.38259381 }
{ latitude: 41.21570867, longitude: -74.5737785 }
{ latitude: 38.97548681, longitude: -74.46242522 }
```