class SurveyBoxMapItem extends MapItem
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

        var coords = this.getSurveyBoundsLatLongFromCoords(this.vertices, SG.zone);
        var polygon = L.polygon(coords);
        polygon.setStyle(myStyle);
        return polygon;
    }

    
} 