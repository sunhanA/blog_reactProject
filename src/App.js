import React, {Component} from "react";
import "./App.css";

class App extends Component{
    render(){
        return (
            <div className="App">
                <div className = 'circleTitle'>
                    <span className = 'circlePart circleLeft'>S</span>
                    <span className = 'circlePart circleRight'>H</span>
                </div>
                <div className = 'moveImgBlock'>
                    <img 
                        className = 'moveImg' 
                        src = '/images/huaji.png' 
                        alt = '滑稽'
                        draggable = {false}
                        onMouseMove = {(e) => this.move(e)}
                        onMouseLeave = {(e) => this.recover(e)}
                    />
                </div>
                <div className = 'footer'>
                    <ul>
                        <li>
                            <a href = 'http://sunh.top' className = 'small' draggable = {false}>首页</a>
                            <img src = 'images/huaji.png' className = 'menuIcon small' draggable = {false} alt = '菜单'/>
                        </li>
                        <li>
                            <a href = 'http://sunh.top' className = 'middle' draggable = {false}>首页</a>
                            <img src = 'images/huaji.png' className = 'menuIcon middle' draggable = {false} alt = '菜单'/>
                            </li>
                        <li>
                            <a href = 'http://sunh.top' className = 'large' draggable = {false}>首页</a>
                            <img src = 'images/huaji.png' className = 'menuIcon large' draggable = {false} alt = '菜单'/>
                        </li>
                        <li>
                            <a href = 'http://sunh.top' className = 'middle' draggable = {false}>首页</a>
                            <img src = 'images/huaji.png' className = 'menuIcon middle' draggable = {false} alt = '菜单'/>
                        </li>
                        <li>
                            <a href = 'http://sunh.top' className = 'small' draggable = {false}>首页</a>
                            <img src = 'images/huaji.png' className = 'menuIcon small' draggable = {false} alt = '菜单'/>
                        </li>
                    </ul>
                    <p className = 'copyRightText'>Design by sunh个人主页 鄂ICP备18007225</p>
                </div>
            </div>
        );
    }
    getDistance(point1, point2){
        let x1 = point1.x,
            y1 = point1.y,
            x2 = point2.x,
            y2 = point2.y,
            dis = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

        return Number(dis.toFixed(2));
    }
    move(e){
        // console.log(e.nativeEvent);
        // console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        let {nativeEvent} = e,
            x = nativeEvent.offsetX,
            y = nativeEvent.offsetY,
            centerX = nativeEvent.target.width / 2,
            centerY = nativeEvent.target.height / 2,
            dis = this.getDistance({x, y}, {x: centerX, y: centerY}),
            maxDis = this.getDistance({x: 0, y: 0}, {x: centerX, y: centerY});

        let moveX = (dis / maxDis) * 30,
            rotateAngle = (dis / maxDis) * 10;
        if(x < centerX && y < centerY){
            // 左上
            e.target.style = `transform: translate3d(-${moveX}px, -${moveX}px, 0) skew(${rotateAngle}deg)`;
        }
        else if(x >= centerX && y < centerY){
            // 右上
            e.target.style = `transform: translate3d(${moveX}px, -${moveX}px, 0) skew(-${rotateAngle}deg)`;
        }
        else if(x < centerX && y >= centerY){
            // 左下
            e.target.style = `transform: translate3d(-${moveX}px, ${moveX}px, 0) skew(-${rotateAngle}deg)`;
        }
        else if(x >= centerX && y >= centerY){
            // 右下
            e.target.style = `transform: translate3d(${moveX}px, ${moveX}px, 0) skew(${rotateAngle}deg)`;
        }
    }
    
    recover(e){
        e.target.style = `transform: translate3d(0px, 0px, 0px) skew(0deg)`;
    }
}
export default App;
