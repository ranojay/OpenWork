

class WellItem extends Item3D
{
    constructor(wellobj)
    {
        super();
        this.name = wellobj.name;
        this.color = wellobj.color;
        this.vertices = wellobj.track;
        this.setMinMax(wellobj.min, wellobj.max);
        var logpath = [];
        var logvals = [];
        this.logPath = 0;
        this.logVals = 0;
        this.needsColorbar = false;

        if (wellobj.hasOwnProperty("log"))
        {
            for (var idx = 0; idx < wellobj.log.length; idx++)
            {
                var val = wellobj.log[idx];
                logpath.push([val[0], val[1], val[2]]);
                logvals.push(val[3]);
            }
            if (logpath.length != 0)
            {
                this.setLogData(logpath, logvals);
            }
        }
        this.type = "well";
        this.coltab.setColorMap("Porosity");
        this.coltab.on('changed', () => this.coltabChanged());

       
        this.imgsrc = "images/wells.png";
    }

    setLogData(logpath, logvals)
    {
        this.logPath = logpath;
        this.logVals = logvals
        this.needsColorbar = true;
    }

    coltabChanged()
    {
        this.emit('changed', 0);
    }
    
}