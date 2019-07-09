import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

class App extends Component{
    state = {
        isShow: true,
    }
    componentDidMount() {
      this.createText()
    }
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
                            <Link to="/resume" className="small" draggable={false}>我的简历</Link>
                            <div className = 'menuIconBg small'>
                                <img className = 'smallImg' src = 'images/notebook.svg'  draggable = {false} alt = '菜单'/>
                            </div>
                        </li>
                        <li>
                            <Link to="/work" className="middle" draggable={false}>我的工作</Link>
                            <div className = 'menuIconBg middle'>
                                <img className = 'middleImg' src = 'images/bank.svg'  draggable = {false} alt = '菜单'/>
                            </div>
                        </li>
                        <li>
                            <Link to="/main" className="large" draggable={false}>主页</Link>
                            <div className = 'menuIconBg large'>
                                <img className = 'largeImg' src = 'images/files-and-folders.svg'  draggable = {false} alt = '菜单'/>
                            </div>
                        </li>
                        <li>
                            <Link to="/book" className="middle" draggable={false}>我的书架</Link>
                            <div className = 'menuIconBg middle'>
                                <img className = 'middleImg' src = 'images/app.svg'  draggable = {false} alt = '菜单'/>
                            </div>
                        </li>
                        <li>
                            <Link to="/topic" className="small" draggable={false}>前端社区</Link>
                            <div className = 'menuIconBg small'>
                                <img className='smallImg' src = 'images/paper-plane.svg'  draggable = {false} alt = '菜单'/>
                            </div>
                        </li>
                    </ul>
                    <p className = 'copyRightText'>Design by sunh个人主页 鄂ICP备18007225</p>
                </div>

                <div className = 'switchBtn' onClick = {() => this.controlShow()}>{this.state.isShow ? '关闭弹幕' : '打开弹幕'}</div>

                <div className="barrage" ref="barrage"></div>

                <div className = 'share'>
                    <p className = 'shareTitle'>分享</p>
                    <ul className = 'shareList' onClick = {(e) => this.share(e)}>
                        <li><img src = '/images/qq.svg' alt = 'qq' draggable = {false} /><span>分享给好友</span></li>
                        <li><img src = '/images/qqzone.svg' alt = 'qqzone' draggable = {false}/><span>分享到空间</span></li>
                        <li><img src = '/images/sina.svg' alt = 'sina' draggable = {false}/><span>分享到微博</span></li>
                    </ul>
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

    controlShow(){
        console.log(this.refs)
        this.refs.barrage.classList.toggle('hidden')
        this.setState({isShow: !this.state.isShow});
    }

    share(e){
        if(e.target.nodeName === 'IMG'){
            return;
        }
        let shareText = e.target.innerHTML;
        let p = {
            /*获取URL，可加上来自分享到QQ标识，方便统计*/  
            url: 'http://sunh.top',   
            desc: '查看他的个人主页http://sunh.top',
            /*分享标题(可选)*/
            title: '分享孙寒的个人主页',
            /*分享摘要(可选)*/
            summary: '还不赶紧点击进来观看',
            /*分享图片(可选)*/
            pics: '',
            /*视频地址(可选)*/
            flash: '',
           /*分享来源(可选) 如：QQ分享*/
           site: '',
           style: '',
           width: 32,
           height: 32
        };
        let content = [];
        let shareUrl;
        for(let pro in p){
            content.push(`${pro}=${p[pro]}`);
        }
        if(shareText === '分享给好友'){
            shareUrl = 'http://connect.qq.com/widget/shareqq/index.html?';
        }
        else if (shareText === '分享到空间'){
            shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
        }
        else if (shareText === '分享到微博'){
            shareUrl = 'http://service.weibo.com/share/share.php?';
        }
        window.open(shareUrl+content.join('&'));
    }

    createText() {
      let arr = [
        '弹幕测试',
        '测试',
        '哈哈哈',
        '哈哈哈',
        '哈哈哈',
        '哈哈哈',
        '哈哈哈',
      ]
      arr.map(value => {
        let p = document.createElement('p')
        p.textContent = value
        p.setAttribute('style', `top:${Math.random()*500}px;right:-${Math.random()*100}px;color:rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`)
        this.refs.barrage.appendChild(p)
      })
    }
}
export default App;
