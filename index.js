function updatemap() {
    console.log("updating realtime data");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)   this will only display the elements of array 
            console.log(rsp)  // "rsp" ek object h uske andar ek data h usme array h
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;


                cases = element.infected;
                if (cases>255){
                    color = "red";
                }
                else{
                    color = `rgb(${cases}, 0, 0)`
                }

                //mark on the map

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}
let interval = 2000;
setInterval(updatemap, interval);
// updatemap();