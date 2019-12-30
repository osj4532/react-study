import React, {Component} from "react";
import MenuButton from './MenuButton';
import Menu from './Menu';

class MenuContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    handleMouseDown(e){
        this.toggleMenu();

        console.log(this.state.visible);
        
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                <div>
                    <p>Can you spot the item that doesn't belong?</p>
                    <ul>
                        <li>Menu1</li>
                        <li>Menu2</li>
                        <li>Menu3</li>
                        <li>Menu4</li>
                        <li>Menu5</li>
                        <li>Menu6</li>
                        <li>Menu7</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;