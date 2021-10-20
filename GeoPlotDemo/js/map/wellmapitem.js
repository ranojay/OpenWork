class WellMapItem extends MapItem
{
    constructor(item,map)
    {
        super(item,map);
    }

    createShape()
    {
        var topcoords = [];
        topcoords.push(this.vertices[0]);
        var latlong = this.getLatLongFromCoords(topcoords, SG.zone);
        var marker = L.marker(latlong[0]);
        marker.bindPopup(this.item.name)
        return marker;
    }
}