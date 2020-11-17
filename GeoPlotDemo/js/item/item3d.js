function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColorRGB()
 {
    var color = [];
    for (var i = 0; i < 3; i++)
    {
        color.push(Math.random());
    }

    return color;
}

class Item3D extends EventEmitter
{
    constructor()
    {
        super();
        this.vertices = [];
        this.type = ""
        this.rows = 0;
        this.cols = 0;
        this.name = "";
        this.isvisible = true;
        this.coltab = new ColTab();
        this.needsColorbar = false;

        this.color =  getRandomColorRGB()
       
    }

    setVertices(vs)
    {
        this.vertices = vs;
    }

    setType(typ)
    {
        this.type = typ;
    }

    setRowCol(r,c)
    {
        this.rows = r;
        this.cols = c;
    }

    updateVertices(vs)
    {
        this.vertices = vs;
        this.emit('changed', 0);
    }

    setMinMax(min, max)
    {
        this.min = min;
        this.max = max;

        this.coltab.setMin(min);
        this.coltab.setMax(max);
    }

    setVisible(isVisible)
    {
        this.isvisble = isVisible;
        this.emit('visibilityChanged', isVisible);
    }

    
}