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