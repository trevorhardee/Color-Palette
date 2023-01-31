import React, { useState } from "react";
import { HiLockClosed, HiLockOpen, HiOutlineX, HiSwitchHorizontal, HiPlus } from "react-icons/hi";

export default class ColorTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tileColor: '',
            isLocked: false
        };
        this.handleLockClick = this.handleLockClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleLockClick() {
        this.setState({
            isLocked: !this.state.isLocked
        });
    }

    handleDeleteClick(){
        // Delete canvas
        window.removeEventListener('keydown', this.onkeydown);
        var div = document.getElementById('canvas-div');
        div.remove();
    }
    
    componentDidMount(){
        window.addEventListener('keydown', this.onkeydown);
        this.setState({
            tileColor: this.RandomizeColor()
        });
    }

    GeneratePalette() {
        console.log(this.state);
        this.setState({
            tileColor: this.RandomizeColor()
        });
    }
    RandomizeColor(){
        if (!this.state.isLocked){
            let red = Math.floor(Math.random() * 255).toString(16);
            red = red.length < 2 ? red = '0' + red: red;
            let green = Math.floor(Math.random() * 255).toString(16);
            green = green.length < 2 ? green = '0' + green: green;
            let blue = Math.floor(Math.random() * 255).toString(16);
            blue = blue.length < 2 ? blue = '0' + blue: blue;
            return '#' + red + blue + green;
        } 
        return this.state.tileColor;
    }

    onkeydown = (event) => {
        console.log('Received a key!');
        var keyPressed = event.key;
        if (keyPressed === ' '){
            this.setState({
                tileColor: this.RandomizeColor()
            });
      }
    
    };

    unlock() {
        return <HiLockOpen />;
    }
    
    lock() {
        return <HiLockClosed />;
    }

    deletor(){ 
        return <HiOutlineX />
    }
    adder(){
        return <HiPlus />
    }
    switcher(){
        return <HiSwitchHorizontal />
    }

    componentWillUnmount(){
        // This is to tear down the did Mount piece
    }
    render() {
        return (
        <>
            <div id="canvas-div" className="Canvas" 
                style={{backgroundColor: this.state.tileColor}}> 
                {this.state.tileColor.toUpperCase()}
                <div className="Adjustor"
                    onClick={this.handleDeleteClick}>{this.deletor()}</div>
                <div className="Adjustor"
                    onClick={() => (this.GeneratePalette())}>{this.adder()}</div>
                <div className="Adjustor">{this.switcher()}</div>
                <div className="Adjustor" 
                    onClick = {() => (!this.handleLockClick())}>
                    {this.state.isLocked ? this.lock(): this.unlock()}
                </div>
            </div>
        </>
        );
    }
}
