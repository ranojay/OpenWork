class MapView
{
    constructor(win)
    {
        this.win = win
        this.width = win.clientWidth;
        this.height = win.clientHeight;

        this.mapdiv = document.createElement("div");
        this.mapdiv.setAttribute("id", "mapid");
        this.mapdiv.style.height = "55%";
        this.mapdiv.style.width = "100%";
        this.win.appendChild(this.mapdiv);

        this.map = new Map('mapid', [10.505, 10.09], 1);
    }

    addItem(item)
    {
        if (item.type == "line2d")
        {
            var mapitem = new Line2DMapItem(item,this.map.map);
            this.map.addItem(mapitem);
        }
        else if (item.type == "surveybox")
        {
            var mapitem = new SurveyBoxMapItem(item,this.map.map);
            this.map.addItem(mapitem,true);
        }
    }

    addJSON(json)
    {
        var item = new Item3D();
        item.vertices = json.path;
        item.type = "line2d";
        item.name = json.name;
        this.addItem(item);
    }
}

