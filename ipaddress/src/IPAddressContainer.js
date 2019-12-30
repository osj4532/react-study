import React, {Component} from 'react';
import IPAddress from './IPAddress';

var xhr;

class IPAddressContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            this.setState({
                ip_address: response.ip
            });
        }else if(xhr.readyState === 4 && xhr.status === 429){
            this.setState({
                ip_address: "이번달 사용량 초과로 사용 불가!"
            });
        }
    }
    
    render(){
        return(
            <IPAddress ip={this.state.ip_address}/>
        );
    }
}

export default IPAddressContainer;