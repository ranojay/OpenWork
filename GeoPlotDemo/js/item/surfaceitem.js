class SurfaceItem extends Item3D {
    constructor(json) {
        super();
        this.name = json.name;
        this.vertices = json.coords;
        this.type = "surface";
        this.NeedsTransform = true;
        this.needsColorbar = true;
        this.rows = json.rows;
        this.cols = json.cols;
        this.texturewidth = this.rows+1;
        this.textureheight = this.cols;
        this.texturedata = new Uint8Array(this.texturewidth * this.textureheight * 3);
        this.coltab.setColorMap( "Rainbow" );
        this.coltab.on('changed', () => this.coltabChanged());

      	this.coltab.setMin(json.min);
        this.coltab.setMax(json.max);
        this.imgsrc = "images/surfaces.png";

        //this.update()
    }

    update()
    {   
        //this.updateTexture()
        this.emit('changed', 0);
    }

    updateTexture()
    {
        //var vidx = 0;
        //var w = this.texturewidth;
        //for (var i = 0; i < this.textureheight; i++)
        //{
        //    for (var j = 0; j < this.texturewidth; j++)
        //    {
                
        //        var cstep = i * w;
        //        var cidx = j + cstep;
        //        var vert = this.vertices[cidx];
           
        //        var stride = vidx * 3;
               
               
        //        var clr = this.coltab.getColorUB(vert[2]); 
            
        //        this.texturedata[stride] = clr[0];
        //        this.texturedata[stride + 1] = clr[1];
        //        this.texturedata[stride + 2] = clr[2];
        //         vidx++;
        //    }

        //}
    }

    getVertices()
    {
        return this.vertices;
    }

    coltabChanged()
    {
        this.update();
    }

}