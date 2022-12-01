mapboxgl.accessToken = "pk.eyJ1IjoiY3NhcGhpIiwiYSI6ImNsOXd0eXJ5aDA0MXozcm1qbTl0Z3dldnkifQ.NZxoecH0XDE2h-SOyCxeEQ";
const map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/csaphi/cl9wu1dto000214qh4jfaga4y",
    center: [-75.1652, 39.9526],
    zoom: 12,
    projection: "globe",
});
map.on("style.load", () => {
    map.setFog({});
});

// add geojson
map.on("load", function (){
    map.addSource("food",{
        type:"geojson",
        data:"./NeighborhoodFoodRetail.geojson",
    });

    // add a layer to map

    map.addLayer({
        id: "food",
        type: "fill",
        source: "food",
        layout: {},
        paint:{
            "fill-color": [
                "case",
                ["==", ["get", "PCT_HPSS"], null],
                "rgba(0,0,0,0)",
                [
                "interpolate",
                ["linear"],
                ["get", "PCT_HPSS"],
                0,
                "rgba(255,0,0,0)",
                4,
                "rgba(60,60,60,20)",
                8,
                "rgba(90,60,60,100)",
                12,
                "rgba(175,60,60,175)",
                20,
                "rgba(255,60,60,225)",
            ],
        ],
            "fill-opacity": 0.9,
        },
    });
});
