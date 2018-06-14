
// render() // 替换自身
// _render(prop)  // 需要实现
// _bindListener(element)  // 需要实现
// constructor(props)
// element ： HTMLElement

// on(event,handle )  // 类似 addEventListener
// emit(event,data)

// 数据结构 + 算法（方法）

class UIBase {

  constructor(props){
    this.props = props || {};
    this._events = {};
    this.render();
  }

  // eventType:string
  // handle(data): function
  // ui.on("custromclick", function(){})
  on(eventType, handle){

    // let handles = this._events[eventType];
    // if(handles){
    //   handles = this._events[eventType] = [];
    // }

    let handles = this._events[eventType] = (this._events[eventType] || []);
    handles.push(handle);
  }

  // eventType:string
  // data: any
  emit(eventType , data){
    let handles = this._events[eventType];
    if(handles){
      handles.forEach(handle=>handle(data));
    }
  }

  _bindListener(element){

  }

  // 渲染
  render(){

    // 定位
    let oldElement = this.element;
    // return document.body.innerHTML = html;
    const div = document.createElement("div");
    // this === list
    div.innerHTML = this._render(this.props);
    // 1 html -> dom ,2  不影响 document.body 内容
    this.element = div.querySelector(":first-child");
    this._bindListener(this.element);
    if(oldElement){
      oldElement.insertAdjacentElement("afterEnd",this.element);
      oldElement.remove();
    }
  }

}
