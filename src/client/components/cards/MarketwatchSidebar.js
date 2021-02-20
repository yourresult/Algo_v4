import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const style = {
    inputSearch: {
        fontSize: "0.8rem",
        lineHeight: "2.15",
        paddingLeft: ".75em",
        paddingRight: ".75em",
        minHeight: "auto",
        padding: ".33em .75em",
        border: "0",
        background: "transparent",
        transition: "all .2s linear",
        width: "100%"
    }
}
var component = {
    /**
     * ? Instruments Action Button
     * ? if Mouse hove on marketwatch instrument then append action Button
     */
    iActionBtn: function (d, value = []) {
        var id;
        !d ? id = null : id = parseInt(d.target.getAttribute("index"))
        return {
            id: id,
            value: value
        }
    }
}
const MarketWatch = (props) => {
    const [list, createList] = useState({
        id: null,
        value: props.data.symbol
    })
    var instruments = list.value.map((val, ind) => {
        var actionBtn = <span className="actionBtn"><span className="badge badge-primary text-white ml-auto buyAct">B</span> <span className="badge ml-2 text-white deep-orange color-white sellAct">S</span> <span className="badge ml-2 hGray"><i className="fas fa-chart-line" /></span> <span className="badge ml-2 hGray" id="scriptTrash"><i className="far fa-trash-alt" /></span> <span className="badge ml-2 hGray"><i className="fas fa-ellipsis-h" /></span></span>
        return (
            <Draggable key={'id_' + ind} draggableId={'id_' + ind} index={ind}>
                {(provided) => (
                    <li className="list-group-item" index={ind} onMouseEnter={(dat) => createList(component.iActionBtn(dat, list.value))} onMouseLeave={(dat) => createList(component.iActionBtn(null, list.value))} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        {val}
                        {ind == list.id ? actionBtn : ''}
                    </li>
                )}
            </Draggable>
        )
    })
    var reorder = action => {
        var startIndex, endIndex;
        startIndex = action.source.index;
        endIndex = action.destination.index;
        var result = Array.from(list.value);
        var [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        createList({
            id: null,
            value: result
        })
    };
    return (
        <DragDropContext onDragEnd={reorder}>
            <Droppable droppableId="stock">
                {(provided) => (
                    <ul className="list-group list-group-flush" {...provided.droppableProps} ref={provided.innerRef}>
                        <li className="list-group-item">
                            <div className="form-outline">
                                <input className="search" style={style.inputSearch} type="text" placeholder="Search eg: Infy bse, nifty fut weekly, gold mcx" />
                            </div>
                        </li>
                        {instruments}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );

};
export default MarketWatch;