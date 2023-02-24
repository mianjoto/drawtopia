class Scribble{

    constructor(canvas, roomId, authorName,geolocation){
        this.canvas = canvas;
        this.roomId = roomId;
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

    getRoom(){
        return this.roomId;
    }

}