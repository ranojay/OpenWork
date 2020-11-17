class SliceData
{
    constructor(curLine, start, stop, step, starty, stopy, stepy, startz, stopz, stepz) 
    {
	this.start = start;
	this.stop = stop;
	this.step = step;

	this.startz = startz;
	this.stopz = stopz;
	this.stepz = stepz;

	this.starty = starty;

	this.stopy = stopy;
	this.stepy = stepy;

	this.coltabName = "Red-White-Black";
	this.min = -255;
	this.max = 255;
	this.curLine = curLine;
    }

    setPath(path)
    {
	this.path = path;
    }

    setTraces(traces)
    {
	this.traces = traces;
    }

}