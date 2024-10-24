import React, { useState } from 'react';

export default function ElementActioinsTimeLine({actions}) {

    const [initialActions, setInitialActions] = useState(actions);
    const [draggedItem, setDraggedItem] = useState(null);
	const [dragStart, setDragStart] = useState(null);
	const [dragOver, setDragOver] = useState(null);



    if (actions.length === 0) {
        return <div>No actions available</div>;
    }

      const handleDragStart = (e, id, element = null) => {
		  e.stopPropagation();
		  setTimeout(() => {
			  setDraggedItem(id);
			  // console.log(initialActions)
			  console.log('After drag start initial actions')
			  console.log("Drag start: "+element +' : ' + id)
		  }, 0);
      };

      const handleDragOver = (e, id, element = null) => {
		  e.stopPropagation();

		  setTimeout(() => {
			  // console.log(initialActions)
			  console.log('After drag over initial actions')
			  console.log("Drag over: "+element +' : ' + id)
		  }, 0);


        // const draggedOverItem = tasks.find(task => task.id === id);
        // if (draggedItem === draggedOverItem) {
        //   return;
        // }
        // let items = tasks.filter(task => task.id !== draggedItem);
        // let index = tasks.indexOf(draggedOverItem);
        // items.splice(
        //   index,
        //   0,
        //   tasks.find(task => task.id === draggedItem),
        // );
        // setTasks(items);
      };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    return (
        <div>
            {initialActions.map((action, index) => (
                <div key={index}>
                    {Object.keys(action).map(time => (
                        <div
                            draggable={action[time] !== 'End'}
                            key={time}
                            className='single_action_name'
                            style={{display: 'flex'}}
                            onDragStart={e => handleDragStart(e, time)}
                            onDragOver={e => handleDragOver(e, time)}
                            onDragEnd={handleDragEnd}
                        >
                            <span>{time}</span>
                            {action[time]?.elements ? (
                                <div style={{ marginLeft: '20px' }}>
                                    {Object.keys(action[time].elements).map((elementKey, elemIndex) => (
                                        <div
                                            key={elemIndex}
                                            className='single_element_action'
                                            draggable="true"
                                            onDragStart={e => handleDragStart(e, time, elementKey)}
                                            onDragOver={e => handleDragOver(e, time, elementKey)}
                                            onDragEnd={handleDragEnd}
                                        >
                                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <div> Targeted Element </div>
                                            <p><strong>{elementKey}</strong></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : action[time] === 'End' ? (
                                <div style={{ color: 'red', paddingLeft: '30px' }}>End</div>
                            ) : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
