import React, {useState} from "react";
import Card from "./Card";
import {
    DragDropContext,
    Draggable,
    DraggableStateSnapshot,
    DraggingStyle,
    Droppable,
    DropResult,
    NotDraggingStyle
} from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid'
import {itemsFromBackend} from "../data/itemsFromBackend";
import "../styles/Lanes.css"
import confetti from "canvas-confetti";

const columnsFromBackend = {
    [uuid()]: {
        name: "Start",
        items: itemsFromBackend
    },
    [uuid()]: {
        name: "+25%",
        items: []
    },
    [uuid()]: {
        name: "+50%",
        items: []
    },
    [uuid()]: {
        name: "+75%",
        items: []
    },
    ['finish']: {
        name: "Finished",
        items: []
    },
};

const onDragEnd = (result: DropResult, taskColumns: { [p: string]: any }, setTaskColumns: (arg0: any) => void) => {
    if (!result.destination) return;
    const {source, destination} = result;
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = taskColumns[source.droppableId];
        const destColumn = taskColumns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setTaskColumns({
            ...taskColumns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = taskColumns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setTaskColumns({
            ...taskColumns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

const Lanes = () => {
    function getStyle(style: DraggingStyle | NotDraggingStyle | undefined, snapshot: DraggableStateSnapshot) {
        if (snapshot.isDropAnimating && snapshot.draggingOver === "finish") {
            console.log(style)
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 70,
                origin: { x: 0, y: 0.9 }
            });
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 70,
                origin: { x: 1, y: 0.9 }
            });
        }
        return style;
    }

    const [taskColumns, setTaskColumns] = useState(columnsFromBackend);
    return (
        <div className="context-wrapper">
            <DragDropContext
                onDragEnd={result => onDragEnd(result, taskColumns, setTaskColumns)}
            >
                {Object.entries(taskColumns).map(([columnId, column], index) => {
                    return (
                        <div className="column-wrap" key={columnId}>
                            <h2>{column.name}</h2>
                            <div style={{margin: 8}}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className="dropbox"
                                                 {...provided.droppableProps}
                                                 ref={provided.innerRef}
                                                 style={{
                                                     background: snapshot.isDraggingOver
                                                         ? "#eee"
                                                         : "#ddd"

                                                 }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        className="d-flex justify-content-center"
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getStyle(provided.draggableProps.style, snapshot)}>
                                                                        <Card
                                                                            color={item?.item?.color}
                                                                            headerTitle={item?.item?.headerTitle}
                                                                            imgPath={item?.item?.imgPath}
                                                                            title={item?.item.title}
                                                                            body={item?.item?.body}
                                                                            value={item?.item?.value}
                                                                        />
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default Lanes
