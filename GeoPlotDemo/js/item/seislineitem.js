class SeisLineItem extends Item3D
{
    constructor(sd,type)
    {
        super();
        this.type = type;
        this.NeedsTransform = true;
        this.texturewidth = (sd.stopy - sd.starty) / sd.stepy + 1;
        this.textureheight = (sd.stopz - sd.startz) / sd.stepz + 1;
        this.texturedata = new Uint8Array(this.texturewidth * this.textureheight * 3);

        this.coltab.setMin(sd.min);
        this.coltab.setMax(sd.max);

        this.curline = sd.curLine;

        this.sd = sd;
        this.start = sd.start;
        this.stop = sd.stop;
        this.step = sd.step;

        this.startz = sd.startz;
        this.stopz = sd.stopz;
        this.stepz = sd.stepz;

        this.needsColorbar = true;
        this.coltab.setColorMap(sd.coltabName);
        this.coltab.on('changed', () => this.coltabChanged());
        this.update(this.curline);
    }

    update(curline)
    {
        this.curline = curline;
        if (this.type == "line2d")
            this.updateLine2D(curline);
        else if (this.type == "inl")
            this.updateInline(curline)
    }

    updateInline(inl)
    {
        var crl1 = this.sd.starty;
        var crl2 = this.sd.stopy;
        var coord1 = SG.inlcrl2coords(inl, crl1);
        var coord2 = SG.inlcrl2coords(inl, crl2);
        this.vertices = [coord1, coord2];
        this.updateTexture(inl)
        this.emit('changed', 0);
    }

    updateCrossline(crl)
    {
        /*var crl1 = SG.startCrl;
        var crl2 = SG.stopCrl;
        var coord1 = SG.inlcrl2coords(inl, crl1);
        var coord2 = SG.inlcrl2coords(inl, crl2);
        this.vertices = [coord1, coord2];
        this.updateTexture(inl)
        this.emit('changed', 0);*/
     }
    
    updateLine2D(lineNo)
    {
        this.vertices = this.sd.path;
        this.updateTexture(0)
        this.emit('changed', 0);
     }
        
    updateTexture(inl)
    {
        var idx = 0;

        for (var j = 0; j < this.texturewidth; j++)
        {
            for (var i = this.textureheight-1; i >= 0; i--) 
            {
                var tidx = j + i * this.texturewidth;
                var stride = tidx * 3;
             
                var trc = this.sd.traces[idx++];
                var clr = this.coltab.getColorUB(trc);

                this.texturedata[stride] = clr[0];
                this.texturedata[stride + 1] = clr[1];
                this.texturedata[stride + 2] = clr[2];
            }
        }
    }

    getVertices()
    {
        return this.vertices;
    }

    coltabChanged()
    {
        this.update(this.curline);
    }


}