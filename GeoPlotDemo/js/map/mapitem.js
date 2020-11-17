class MapItem
{
    constructor(item,map)
    {
        this.item = item;
        this.vertices = item.vertices;
        this.map = map;
        this.shape = this.createShape();
        item.on('changed', () => this.updateVertices())
        this.item.on('visibilityChanged', (isVisible) => this.setVisible(isVisible))
    }

    updateVertices()
    {
        this.vertices = this.item.vertices;
    }

    getShape()
    {
        return this.shape;
    }

    setVisible(isVisible)
    {
        if (isVisible)
            this.map.addLayer(this.shape);//For show
        else
            this.map.removeLayer(this.shape);// For hide
       
    }

    getSurveyBoundsLatLongFromCoords(corners, utmzone)
    {
        var x1 = corners[0][0];
        var y1 = corners[0][1];

        var x2 = corners[1][0];
        var y2 = corners[1][1];

        var x3 = corners[2][0];
        var y3 = corners[2][1];

        var x4 = corners[3][0];
        var y4 = corners[3][1];

        var utm = "+proj=utm +zone=" + utmzone + " +ellps=WGS84 +datum=WGS84 +units=m +no_defs";//"+proj=utm +zone=20 +ellps=clrk66 +units=m +no_defs";
        var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

        var surveybounds = [];
        var lnglat = proj4(utm, wgs84, [x1, y1]);
        surveybounds.push([lnglat[1], lnglat[0]]);

        lnglat = proj4(utm, wgs84, [x2, y2]);
        surveybounds.push([lnglat[1], lnglat[0]]);

        lnglat = proj4(utm, wgs84, [x3, y3]);
        surveybounds.push([lnglat[1], lnglat[0]]);

        lnglat = proj4(utm, wgs84, [x4, y4]);
        surveybounds.push([lnglat[1], lnglat[0]]);
        return surveybounds
    }

    getLatLongFromCoords(coords, utmzone)
    {
        var longlats = [];
        var utm = "+proj=utm +zone=" + utmzone + " +ellps=WGS84 +datum=WGS84 +units=m +no_defs";//"+proj=utm +zone=20 +ellps=clrk66 +units=m +no_defs";
        var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

        for (var idx = 0; idx < coords.length; idx++)
        {
            var pos = coords[idx];
            var latlong = proj4(utm, wgs84, [pos[0], pos[1]]);
            longlats.push([latlong[1], latlong[0]]);
        }

        return longlats;
    }

}