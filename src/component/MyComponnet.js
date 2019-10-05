import React, {Component} from 'react'
import './MyComponnet.css'

export default class MyConponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [
                '1',
                '2'
            ]
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="jspang">service:</label>
                <input id="jspang" className="input" value={this.state.inputValue}
                       onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList.bind(this)}>add</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.deleteItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html: item}}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    inputChange(e) {
        this.setState({
                inputValue: e.target.value
            }
        )
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }

    deleteItem(index) {
        //借助一个中间变量来读取list，用setState来写入
        let list = this.state.list;
        list.splice(index);
        this.setState({list})
    }
}
