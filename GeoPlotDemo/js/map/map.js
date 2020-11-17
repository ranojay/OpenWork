class Map
{
    constructor(id, pos, zoom)
    {
        var streeturl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        var wikiurl = 'https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png'

        this.basic = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom: 1, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
        this.esriocean = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', { minZoom: 1, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
        this.esriterrain = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', { minZoom: 1, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
        this.opentopo = new L.TileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { minZoom: 1, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
        this.black = new L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { minZoom: 1, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
        this.stamenTerrain = L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png',
            {
                maxZoom: 13,
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

            });

        this.Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });

        this.Wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
            minZoom: 1,
            maxZoom: 19
        });

	this.map = L.map(id, {
            center: pos,
            zoom: zoom,
            layers: [this.stamenTerrain]
        });

        var baseLayers = {
            "Default": this.basic,
	        "Wiki": this.Wikimedia,
            "Esri Terrain": this.esriterrain,
            "Dark": this.black,
            "Grey": this.Stamen_TonerLite,
	    "Stamen Terrain" : this.stamenTerrain
        };

        L.control.layers(baseLayers).addTo(this.map);
    }

    addPolygon(coords,nm,clr)
    {
        var myStyle =
        {
            color: clr,
            weight: 1
        };

        var polygon = L.polygon(coords);
        polygon.setStyle(myStyle).addTo(this.map).bindPopup(nm);
        this.map.setView(coords[0], 5);
    }
       

    addItem(mapitem,adjustZoom = false)
    {
        var shp = mapitem.getShape();
        shp.addTo(this.map);
        if (adjustZoom)
        {
            this.map.fitBounds(shp.getBounds());
            this.map.setZoom(6);
        }
    }
}