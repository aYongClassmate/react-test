import React, { Component } from 'react'

class Pupop extends Component{
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      title: '1',
      content: '1'
    }
  }
  render() {
    //let self = this;
    //声明或import 引入但并未使用，报错is defined but never used    no-unused-vars
    return (
      <section class="popup" style={{display: 'block'}}>
        <div className="pbox">
          <span className="close">X</span>
          <div>
            <h4>计划标题</h4>
            <input defaultValue={this.state.title} placeholder="请输入计划标题"/>
          </div>
          <div>
            <h4>计划内容</h4>
            <textarea defaultValue={this.state.content} placeholder="请输入计划内容" rows="3"></textarea>
          </div>
          <div className="pBtn">
            <span>取消</span>
            <span>确认</span>
          </div>
        </div>
      </section>
    )
  }
}
export default Pupop
