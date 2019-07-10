import React, { Component } from 'react'
import styles from './resume.css'
class Resume extends Component {
  render() {
    return (
      <div className="out">
        <div className="in">
          <div className="resumeTitle">
            <div>
              <span className="titleText big">
                <span className="titleText small">个</span>
              </span>
              <span className="titleText big">
                <span className="titleText small">人</span>
              </span>
              <span className="titleText big">
                <span className="titleText small">简</span>
              </span>
              <span className="titleText big">
                <span className="titleText small">历</span>
              </span>
            </div>
            <span className="titleTarget">求职意向：前端开发</span>
          </div>

          <div className="blockInfoContainer">
            <div className="blockInfo">
              <p className="blockInfoTitle">基本信息</p>
              <div className="itemLayout">
                <ul className="itemList">
                  <li className="item">
                    <span className="itemLabel">姓名</span>
                    <span>孙寒</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">名族</span>
                    <span>汉</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">姓名</span>
                    <span>孙寒</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">联系电话</span>
                    <span>17786520405</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">邮箱</span>
                    <span>sunhtop@163.com</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">住址</span>
                    <span>湖北武汉</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">个人网址</span>
                    <span><a href="http://sunh.top">http://sunh.top</a></span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">出生年月</span>
                    <span>1996.04</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">政治面貌</span>
                    <span>共青团员</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">毕业院校</span>
                    <span>文华学院</span>
                  </li>
                  <li className="item">
                    <span className="itemLabel">专业</span>
                    <span>计算机科学与技术</span>
                  </li>
                </ul>
                <img className="itemImg" src="images/huaji.jpg" alt=""/>
              </div>
            </div>
            <div className="blockInfo">
              <p className="blockInfoTitle">教育经历</p>
              <ul>
                <li>fadsfasdf</li>
                <li>fadsfasdf</li>
                <li>fadsfasdf</li>
                <li>fadsfasdf</li>
              </ul>
            </div>
            <div className="blockInfo">
              <p className="blockInfoTitle">教育经历</p>
              <ul>
                <li>fadsfasdf</li>
                <li>fadsfasdf</li>
                <li>fadsfasdf</li>
                <li>fadsfasdf</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Resume