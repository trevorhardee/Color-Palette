import React from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

export default class ColorTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tileColor: '',
            isLocked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isLocked: !this.state.isLocked
        });
    }
    
    componentDidMount(){

        window.addEventListener('keydown', this.onkeydown);

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
        var keyPressed = event.key;
        if (keyPressed === ' '){
            this.setState({
                tileColor: this.RandomizeColor()
            });
            console.log(this.state.tileColor);
      }
    
    };

    unlock() {
        return <HiLockOpen />;
    }
    
    lock() {
        return <HiLockClosed />;
    }

    componentWillUnmount(){
        // This is to tear down the did Mount piece

    }
    render() {
        return (
        <>
            <div className="Canvas" 
                style={{backgroundColor: this.state.tileColor}}> 
                {this.state.tileColor.toUpperCase()}
                <div className="Lock" 
                    onClick = {() => (!this.handleClick())}>
                    {this.state.isLocked ? this.lock(): this.unlock()}
                </div>
            </div>
        </>
        );
    }
}
