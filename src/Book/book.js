import React, { Component } from 'react'
import styles from './book.less'

const bookList = [
  [
    { 
      title: 'CSS权威指南《第3版》',
      url: 'books/css_qwzn.jpg', 
      download: 'https://share.weiyun.com/5ewpCFa',
      code: 'gqqn'
    },
    { 
      title: 'CSS揭秘',
      url: 'books/css_jm.jpg', 
      download: 'https://share.weiyun.com/5C8HSMi',
      code: 'gqqn'
    },
    { 
      title: '你不知道的JavaScript（上卷）',
      url: 'books/js_nbzddjs_shang.jpg', 
      download: 'https://share.weiyun.com/5gdUVrc',
      code: 'gqqn'
    },
  ],
  [
    { 
      title: '你不知道的JavaScript（中卷）',
      url: 'books/js_nbzddjs_zhong.jpg', 
      download: 'https://share.weiyun.com/5gx5kZG',
      code: 'gqqn'
    },
    { 
      title: 'JavaScript权威指南',
      url: 'books/js_qwzn.jpg', 
      download: 'https://share.weiyun.com/5Dezziv',
      code: 'gqqn'
    },
    { 
      title: 'JavaScript高级程序设计',
      url: 'books/js_gjcxsj.jpg', 
      download: 'https://share.weiyun.com/5k4w3D4',
      code: 'gqqn'
    },
  ],
]
class Resume extends Component {
  state = {
    showModel: false,
    selectBook: null,
  }
  componentDidMount() {
    document.title = '我的书架'
  }
  render() {
    let { showModel, selectBook } = this.state
    return (
      <div className={styles.out}>
        <div className={styles.in}>
          <div className={styles.myBook}>我的书架</div>

          <div className={styles.bookshelf}>
            <img className={styles.bookshelfHead} src="images/bookHead.png" alt="" />

            {/* <div className={styles.bookshelfBodyContainer}>
              <img className={styles.bookshelfBody} src="images/bookBody.png" alt="" />
              <div className={styles.bookList}>
                <img className={styles.bookImg} src="books/css_qwzn.jpg" alt=""/>
                <img className={styles.bookImg} src="books/js_gjcxsj.jpg" alt=""/>
                <img className={styles.bookImg} src="books/css_qwzn.jpg" alt=""/>
              </div>
            </div>

            <div className={styles.bookshelfBodyContainer}>
              <img className={styles.bookshelfBody} src="images/bookBody.png" alt="" />
              <div className={styles.bookList}>
                <img className={styles.bookImg} src="books/css_qwzn.jpg" alt=""/>
                <img className={styles.bookImg} src="books/css_qwzn.jpg" alt=""/>
                <img className={styles.bookImg} src="books/css_qwzn.jpg" alt=""/>
              </div>
            </div> */}

            {
              bookList.map( (item, index) => {
                return (
                  <div className={styles.bookshelfBodyContainer} key={index}>
                    <img className={styles.bookshelfBody} src="images/bookBody.png" alt="" />
                    <div className={styles.bookList}>
                      {
                        item.map(books => {
                          return <img className={styles.bookImg} src={books.url} alt="" key={books.title} onClick={() => this.showBook(books)}/>
                        })
                      }
                    </div>
                  </div> 
                )
              })
            }

            <img className={styles.bookshelfFoot} src="images/bookFoot.png" alt="" />
          </div>

          {
            showModel && 
            <div className={styles.model} onClick={() => this.closeModel()}>
              <div className={styles.modelIn}>
                <img src={selectBook.url} alt=""/>
                <p>{selectBook.title}</p>
                <a href={selectBook.download} target="blank">点击下载</a>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

  showBook(book) {
    // console.log('book', book)
    this.setState({ showModel: true, selectBook: book })

  }

  closeModel() {
    this.setState({ showModel: false })
  }
}

export default Resume