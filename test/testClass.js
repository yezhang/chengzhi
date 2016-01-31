/**
 * Created by better on 16/1/6.
 */
class IFigure {
    constructor(width){
        this.width = width;
    }

    get width(){
        console.log("GetWidth");
        return this._width;
    }

    set width(width){
        console.log("SetWidth");
        this._width = width;
    }

    info(){
        console.log(this + 'IFigure');
    }

    static Empty(){
        return new IFigure(0);
    }
}

class TextFigure extends IFigure {
    //info(){
    //    super.info();
    //    console.log(this + 'Text');
    //}
}

let text = new TextFigure();
text.info();


