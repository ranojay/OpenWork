class WellMapItem extends MapItem
{
    constructor(item,map)
    {
        super(item,map);
    }

    createShape()
    {
        var myStyle =
        {
            color: 'red',
            weight: 1
        };

        var topcoords = [];
        topcoords.push(this.vertices[0]);
        var latlong = this.getLatLongFromCoords(this.vertices, SG.zone);
        var marker = L.marker(latlong[0]);
        marker.bindPopup(this.item.name)
        return marker;
    }
}