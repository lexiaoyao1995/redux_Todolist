import React, {Component} from 'react'
import XiaojiejieItem from "./XiaojiejieItem";
import Axios from "axios";

export default class XJJ extends Component {

    constructor(props) {
        super(props)
        this.state = {
            person: {},
            list: [
                "1", "2"
            ]
        }
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        /*
            在这里进行数据的网络加载
        */
        Axios.get('http://127.0.0.1:8080/get').then(res => {
            console.log(res.data);
            this.setState({
                person: res.data
            })
        })
    }

    delete(index) {
        let list = this.state.list;
        list.splice(index);
        this.setState({list})
    }

    render() {
        return (
            <div>
                {this.state.person.name}
                <br/>
                <span>{this.state.person.name}</span>
                <label htmlFor="idd">service:</label>
                <input type="text" id="idd"/>
                <button>add</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <XiaojiejieItem key={index} content={item} index={index} deleteMethod={this.delete}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}