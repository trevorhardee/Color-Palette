import React from "react";
import { HiLockClosed, HiLockOpen, HiOutlineX, HiDocumentDuplicate, HiSparkles } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { randomizeColor, toggleLock } from "../features/color/colorSlice";

export const ColorTile = (props) => {
    const dispatch = useDispatch();
    let tileColor = useSelector((state) => state.color[props.id].tileColor);
    let isLocked = useSelector((state) => state.color[props.id].isLocked);
    
    function unlock() {
        return <HiLockOpen />;
    }
    function lock() {
        return <HiLockClosed style={{visibility: "visible"}}/>;
    }
    function deletor(){ 
        return <HiOutlineX />
    }
    function adder(){
        return <HiSparkles />
    }
    function switcher(){
        return <HiDocumentDuplicate />
    }
    function copyToClipboard(){
        navigator.clipboard.writeText(tileColor)
        alert(`Copied ${tileColor} to clipboard`)
    }
    
    return (
        <>
            <div className="Canvas" 
                width={props.width}
                style={{backgroundColor: tileColor}}> 
                <div className="CanvasColor" onClick={copyToClipboard}>{tileColor.toUpperCase()}</div>
                <div className="Adjustor"
                    onClick={() => dispatch(randomizeColor(props.id))}>{adder()}</div>
                    <strong>
                        <div className="Adjustor"
                            onClick={copyToClipboard}>{switcher()}</div>
                    </strong>
                <div className="Adjustor" 
                    onClick = {() => dispatch(toggleLock(props.id))}>
                    {isLocked ? lock(): unlock()}
                </div>
            </div>
        </>
    )
}    

export default ColorTile;
