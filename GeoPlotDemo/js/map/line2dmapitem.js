class Line2DMapItem extends MapItem
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

        var latlong = this.getLatLongFromCoords(this.vertices, SG.zone);
        var polyline = L.polyline(latlong);
       
        return polyline;
    }

    
}