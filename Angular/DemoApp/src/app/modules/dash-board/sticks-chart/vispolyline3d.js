class VisPolyline3D
{
    constructor(radius, path, color, log = 0, coltab = 0)
    {       
        this.vertices3 = path;
        this.radius = radius;
        this.color = color;
        this.log = log;
        this.coltab = coltab;
        this.vertices1 = [];
        this.indices = [];
        this.normals = [];
        this.uvarray = [];
        this.vertexcolors = [];
        this.needsTransform = false;
        this.useLog = this.log != 0;
        
        this.buildPolyline(this.vertices3, this.vertices1, this.indices, this.vertexcolors, this.useLog, this.log, this.coltab);
        //this.uvs = new Float32Array(this.uvarray);

        //this.normals = calculateNormals(this.vertices1, this.indices)
        this.geometry = new THREE.BufferGeometry();

        this.geometry.setIndex(this.indices);
        this.geometry.addAttribute('color', new THREE.Float32BufferAttribute(this.vertexcolors, 3));
        this.geometry.addAttribute('position', new THREE.Float32BufferAttribute(this.vertices1, 3));
        this.geometry.addAttribute('normal', new THREE.Float32BufferAttribute(this.normals, 3));
        //this.geometry.addAttribute('uv', new THREE.BufferAttribute(this.uvs, 2));

        //this.datatexture = new THREE.DataTexture(this.texturedata, item.texturewidth, item.textureheight, THREE.RGBFormat);
        //texture.magFilter = THREE.NearestFilter;
        //this.datatexture.needsUpdate = true

        //const loader = new THREE.TextureLoader();
        //this.material = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, map: this.datatexture });
        //this.material = new THREE.MeshLambertMaterial({ color: item.color, side: THREE.DoubleSide });
        this.material = new THREE.MeshLambertMaterial({ vertexColors: THREE.VertexColors, side: THREE.DoubleSide });
        //this.material = new THREE.MeshStandardMaterial({ vertexColors: THREE.VertexColors });
        
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.node = new THREE.Object3D();
        this.node.add(this.mesh);
    }

    needsCameraTransform()
    {
        return true;
    }

    getMesh()
    {
        return this.node;
    }

    buildPolyline(path, vertices1, indices, vertexcolors, useLog)
    {
        var vidx = 0;
        var anyvec = new THREE.Vector3(1, 1, 1);
        for (var idx = 0; idx < path.length; idx++)
        {
            var nextidx = idx < path.length - 1 ? idx + 1 : idx
            var point1 = [path[idx][0], path[idx][1], path[idx][2]];
            var transformedp1 = this.needsTransform ? TransformViz(point1) : point1;
            var point2 = [path[nextidx][0], path[nextidx][1], path[nextidx][2]];
            var transformedp2 = this.needsTransform ? TransformViz(point2) : point2;

            var p1 = new THREE.Vector3(transformedp1[0], transformedp1[1], transformedp1[2]);
            var p2 = new THREE.Vector3(transformedp2[0], transformedp2[1], transformedp2[2]);
            var dir = new THREE.Vector3();
            dir.subVectors(p2, p1); dir.normalize();
            var curu = new THREE.Vector3(dir);
            var curv = new THREE.Vector3();
            curu.crossVectors(dir, anyvec);
            curv.crossVectors(dir, curu);
            curu.normalize();
            curv.normalize();
            var res = 20;
            //var radius = this.radius + log[idx];
            //var color = coltab.getColor(log[idx]);
             //var radius = this.log == 0 ? this.radius : this.radius + this.log[idx];
            //var color = this.log == 0 ? this.color : this.coltab.getColor(this.log[idx]);
            var radius = this.radius;
            var color = this.color;
            if (useLog)
            {
                radius = parseFloat(radius + 2 * this.log[idx]);
                color = this.coltab.getColor(this.log[idx]);
            }

            for (var i = 0; i <= res; i++)
            {
                var angl = i * 2 * Math.PI / res;
                var udir = new THREE.Vector3(curu.x, curu.y, curu.z);
                var vdir = new THREE.Vector3(curv.x, curv.y, curv.z);
                udir.multiplyScalar(radius * Math.cos(angl));
                vdir.multiplyScalar(radius * Math.sin(angl));

                var v1 = new THREE.Vector3(udir.x, udir.y, udir.z);
                var v2 = new THREE.Vector3(vdir.x, vdir.y, vdir.z);
                var circvec = new THREE.Vector3();
                circvec.addVectors(v1, v2);

                circvec.add(p1);
                var normal = new THREE.Vector3();
                normal.subVectors(p1,circvec).normalize();
                vertices1.push(circvec.x, circvec.y, circvec.z);

                vertexcolors.push(color[0],color[1],color[2]);
               
                //colors.push(1.0);

                this.normals.push(normal.x);
                this.normals.push(normal.y);
                this.normals.push(normal.z);


                var vidx0 = vidx;
                var vidx1 = vidx + res;
                var vidx2 = vidx + res + 1;
                var vidx3 = vidx + 1;

                indices.push(vidx0, vidx1, vidx2);
                indices.push(vidx2, vidx3, vidx0);
                vidx++;
            }
        }

    }


    updateColors()
    {
        var colidx = 0;

        var colors = this.geometry.attributes.color;
        var colorAray = colors.array;
        var res = 20;
        for ( var i = 0; i < this.log.length; i++ )
        {
            var color = this.coltab.getColor(this.log[i]);
            for ( var j = 0; j <= res; j++ )
            {
                colorAray[colidx] = color[0];
                colorAray[colidx + 1] = color[1];
                colorAray[colidx + 2] = color[2];
                colidx += 3;
            }
        }

        colors.needsUpdate = true;
    }

}