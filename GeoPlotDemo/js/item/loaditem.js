
function loadSurvey(file)
{
    var corners = getSurveyBounds(file)
    item = new Item3D()
    item.setVertices(corners);
    item.setType("Survey Box");

    return item;
}

//function loadSurveyReduced(file) {
//    var corners = getSurveyBoundsReduced(file)
//    item = new Item3D()
//    item.setVertices(corners);
//    item.setType("Survey Box");
//    return item;
//}


function loadSurveyReduced(sg) {
    var corners = sg.getReducedCornerCoords();
    item = new Item3D()
    item.setVertices(corners);
    item.setType("Survey Box");
    return item;
}

function loadSurveyFromSG() {
    var corners = SG.getCornerCoords3D();
    item = new SurveyBoxItem()
    item.setVertices(corners);
    return item;
}

function loadSurveyLatLong(file) {
    var corners = getSurveyBoundsLatLong(file)
    item = new Item3D()
    item.setVertices(corners);
    item.setType("Survey Box");

    return item;
}


function loadItem(file, nrinl, nrcrl)
{
    var coords = loadSurface(file, nrinl, nrcrl);
    item = new SurfaceItem(nrcrl, nrinl,coords)
    //item.setVertices(coords);
    //item.setRowCol(nrcrl, nrinl)
    //item.setType("surface");

    return item;
}

function readSurfaceCoords(file,minz,maxz) {

    var coords = [];
    var lines = file.split('\n');
    for (var idx = 0; idx < Number(lines.length); idx++ ) {

        var line = lines[idx];
        var vals = line.split('\t');
        var finalZ = Number(vals[2]);
        if (!isUndef(finalZ)) {
            maxz.Value = finalZ >= maxz.Value ? finalZ : maxz.Value;
            minz.Value = finalZ >= minz.Value ? minz.Value : finalZ;
        }
        coord = [vals[0], vals[1], finalZ];
        coords.push(coord);
    }

    //maxz.Value = Math.max.apply(Math,zvals);
    //minz.Value = Math.min.apply(Math,zvals);
    return coords;
}


function loadItemCoords(file, nrinl, nrcrl) {
    var minz = { Value: UnDef };
    var maxz = { Value: -UnDef };
    var coords = readSurfaceCoords(file, minz, maxz);

    item = new SurfaceItem(nrcrl, nrinl, coords, minz.Value, maxz.Value);
    //item.setVertices(coords);
    //item.setRowCol(nrcrl, nrinl)

    return item;
}



function loadSurface( file, nrinl,  nrcrl )
{
    var coords = [];
    filedata = file.split(' ');

    var maxz = -1e30, minz = 0;
    var filidx = 0;
    for ( var i=0; i<nrinl; i++ )
    {
        for ( var j=0; j<nrcrl; j++ )
        {
            var z = filedata[filidx++];
            if (!isUndef(z))
                z = Number(z) + Number(1000.5);
            coord = [(i - nrinl/2) * 10, (j-nrcrl/2) * 10, z];
            coords.push(coord);
        }
    }

    return coords;
}

function loadItemIC(file, inlstart, inlstop, istep,
				       crlstart, crlstop, cstep, zfac) 
{
    var nrinl = ((inlstop - inlstart) / istep) + 1;
    var nrcrl = ((crlstop - crlstart) / cstep) + 1;
    var minz = { Value : UnDef };
    var maxz = { Value : -UnDef };
    var coords = loadSurfaceIC(file,
                        inlstart, istep, nrinl,
                        crlstart, cstep, nrcrl, zfac, minz, maxz);
    
    item = new SurfaceItem(nrcrl, nrinl,coords,minz.Value,maxz.Value);
    //item.setVertices(coords);
    //item.setRowCol(nrcrl, nrinl)

    return item;
}

function loadSurfaceIC(file, inlstrt, istep, nrinl,
						 crlstrt, cstep, nrcrl, zfac, minz, maxz) 
{
    var coords = [];
    var lines = file.split('\n');
   
    var ci = 0;
    var inl=0, crl=0; 
    var z = 0, zz = 0;
    var lidx = 0;
    var line = lines[lidx++];
    var vals = line.split('\t');
    inl = vals[0];
    crl = vals[1];
    zz = vals[2] / zfac;
    for ( var curinl = inlstrt, i=0; i<nrinl; i++, curinl+=istep )
    {
        for ( var curcrl = crlstrt, j=0; j<nrcrl; j++, curcrl+=cstep )
        {
            var newz = 1e30;
            if ( inl == curinl && crl == curcrl )
            {
                newz = zz;
		
                line = lines[lidx++];
                vals = line.split('\t');
                inl = vals[0];
                crl = vals[1];
                zz = vals[2]/zfac;
                // *buffstrm  >> inl >> crl >> zz;
            }

	    var finalZ = -newz*10 + 15000;
	    if(!isUndef(finalZ))
	    {
		maxz.Value = finalZ >= maxz.Value ? finalZ : maxz.Value;
                minz.Value = finalZ > minz.Value ? minz.Value : finalZ;
	    }

            coord = [10*(curcrl - crlstrt), 10*(curinl - inlstrt), finalZ];
           
            coords.push(coord);
        }
    }

    
    return coords;
}
    
////progress.setExitState();
//    const time_t now = time( 0 );
//const double diff = difftime( now, start );
////std::cout << "End of read : " << diff << std::endl;

//mmin = minz;
//mmax = maxz;
    
//delete buffstrm;
    
//return coords;
//}



