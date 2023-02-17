class Scribble{

    constructor(canvas,authorName,geolocation){
        this.canvas = canvas;
        this.authorName = authorName;
        this.geolocation = geolocation;
    }

    getLocation(){
        return this.geolocation
    }

    getAuthor(){
        return this.authorName
    }

    getCanvas(){
        return this.canvas
    }

}