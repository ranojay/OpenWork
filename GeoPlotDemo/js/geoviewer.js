class GeoViewer
{
    constructor(maindiv) {
        this.maindiv = maindiv;
        this.bgcolor = "rgb(100,100,150)";

        this.FileInput = document.createElement("INPUT");
        this.FileInput.type = "file";
        this.FileInput.setAttribute("id", "openFile");
        this.FileInput.setAttribute("multiple", "true");
        this.FileInput.setAttribute("value", "Survey");
        this.FileInput.addEventListener('change', () => this.fileInputCB());


        this.maindiv.appendChild(this.FileInput);
       

        this.createLeftPane();
        
        this.createRightPane();

        this.SG;

        this.addTab();
        this.addTab();
    }

    addTab()
    {
        //this.tabview.addTab();
    }

    createLeftPane()
    {
        this.leftdiv = document.createElement("div");
        //this.leftdiv.className = "column left";
        this.leftdiv.style.backgroundColor = this.bgcolor;
   
        this.maindiv.appendChild(this.leftdiv);
        this.geoplot = new GeoPlot(this.leftdiv);
    }

    createRightPane()
    {
        this.rightdiv = document.createElement("div");
        this.rightdiv.className = "column right";
        this.rightdiv.style.backgroundColor = this.bgcolor;

        this.sepdiv = document.createElement("div");
        this.sepdiv.style.height = "0.5%";
        this.sepdiv.style.width = "100%";

        this.tabdiv = document.createElement("div");
        this.tabdiv.setAttribute("id", "2d");
        this.tabdiv.style.height = "44.5%";
        this.tabdiv.style.width = "100%";
        this.tabdiv.style.backgroundColor = "#ccc";

        //this.rightdiv.appendChild(this.mapdiv);
        

        this.maindiv.appendChild(this.rightdiv);
        this.mapview = new MapView(this.rightdiv);
        this.rightdiv.appendChild(this.sepdiv);
        this.rightdiv.appendChild(this.tabdiv);

        //this.viewer2d = new Viewer2D(this.tablediv);
        //this.tabview = new TabView(this.tabdiv);
    }

    addItem(item)
    {
       this.geoplot.addItem(item);
    }
    
    fileInputCB()
    {
        //var filereader = document.getElementById("openFile");
        if ('files' in this.FileInput)
        {
            if (this.FileInput.files.length == 0)
            {
                this.FileInput.value = null;
                return;
            }
        }
        var file;
        var that = this;
        var fr = new FileReader();
        fr.onload = function ()
        {
            file = this.result;
            var json = JSON.parse(file);
            var item = that.geoplot.addJSON(json);
            that.mapview.addItem(item);
        }

        fr.readAsText(this.FileInput.files[0]);
    }      
    
 
}
