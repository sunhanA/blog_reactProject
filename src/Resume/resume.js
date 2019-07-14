import React, { Component } from 'react'
import styles from './resume.less'
class Resume extends Component {
  componentDidMount() {
    document.title = '个人简历'
  }
  render() {
    return (
      <div className={styles.out}>
        <div className={styles.in}>
          <div className={styles.resumeTitle}>
            <div>
              <span className={`${styles.titleText} ${styles.big}`}>
                <span className={`${styles.titleText} ${styles.small}`}>个</span>
              </span>
              <span className={`${styles.titleText} ${styles.big}`}>
                <span className={`${styles.titleText} ${styles.small}`}>人</span>
              </span>
              <span className={`${styles.titleText} ${styles.big}`}>
                <span className={`${styles.titleText} ${styles.small}`}>简</span>
              </span>
              <span className={`${styles.titleText} ${styles.big}`}>
                <span className={`${styles.titleText} ${styles.small}`}>历</span>
              </span>
            </div>
            <span className={styles.titleTarget}>求职意向：前端开发</span>
          </div>

          <div className={styles.blockInfoContainer}>
            <div className={styles.blockInfo}>
              <p className={styles.blockInfoTitle}>基本信息</p>
              <div className={styles.itemLayout}>
                <ul className={styles.itemList}>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>姓名</span>
                    <span>孙寒</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>名族</span>
                    <span>汉</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>姓名</span>
                    <span>孙寒</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>联系电话</span>
                    <span>17786520405</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>邮箱</span>
                    <span>sunhtop@163.com</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>住址</span>
                    <span>湖北武汉</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>个人网址</span>
                    <span><a href="http://sunh.top">http://sunh.top</a></span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>出生年月</span>
                    <span>1996.04</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>政治面貌</span>
                    <span>共青团员</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>毕业院校</span>
                    <span>文华学院</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.itemLabel}>专业</span>
                    <span>计算机科学与技术</span>
                  </li>
                </ul>
                <img className={styles.itemImg} src="images/huaji.jpg" alt=""/>
              </div>
            </div>

            <div className={styles.blockInfo}>
              <p className={styles.blockInfoTitle}>教育背景</p>
              <div className={styles.itemLayout} style={{ margin: '16px 0'}}>
                <span>2015.8-2019.6</span>
                <span>文华学院</span>
                <span>计算机科学与技术（本科）</span>
              </div>
              <p>主修课程：计算机基础，c语言程序设计，数据结构，数据库系统，计算机网络，算法分析与设计，网络通信编程，大数据与云计算概论，web程序设计。</p>
            </div>

            <div className={styles.blockInfo}>
              <p className={styles.blockInfoTitle}>项目经历</p>
              <ul>
                <li>
                  <div><span className={styles.expTime}>2018.8</span><span>个人项目</span></div>
                  <p>个人项目：自己设计简单的页面，服务端利用Node.js、MongoDB数据库、art-template模版引擎，搭建个人网站顺利备案并部署项目至阿里云。</p>
                </li>
                <li>
                  <div><span className={styles.expTime}>2018.12-2019.5</span><span>北京易酒批电子商务有限公司</span></div>
                  <p>App名称：易经销。通过React Native框架，两周完成商品模块开发，一周后提测完成成功上线。在团队中主要扮演前端代码实现的角色，通过与队员沟通，阅读技术文档，完成需求的实现，解决了协同开发中代码冲突问题。在后期维护中总结开发中的不足并开发独立组件统一App风格。</p>
                  <p>web名称：易酒批仓配服务系统。通过Vue+Element框架，查看产品原型同时与后台开发人员联调，最终按时完成考勤模块这一新增需求。</p>
                </li>
              </ul>
            </div>

            <div className={styles.blockInfo}>
              <p className={styles.blockInfoTitle}>技能/证书</p>
              <ul>
                <li><p>英语四级通过，能快速浏览英语专业文件及书籍</p></li>
                <li><p>熟练使用办公软件</p></li>
                <li><p>熟悉HTML，CSS，JavaScript</p></li>
                <li><p>熟练使用Git代码管理</p></li>
                <li><p>熟悉部分设计模式</p></li>
                <li><p>了解Vue2.x，React，React Native框架以及Bootstrap,Ant Design, Element</p></li>
                <li><p>了解Node</p></li>
                <li><p>熟悉PhotoShop图像处理软件</p></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Resume