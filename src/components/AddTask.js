import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay]  = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // text is already accessible via the useState of the component
        // These states are local to the component unlike tasks
        if(!text) {
            alert("Please add task");
            return;
        };
        // Passing the task object to the task
        onAdd({text, day, reminder});
        // Reset the form
        setText("");
        setDay("");
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add task ...'
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add task ...'
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" 
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                checked={reminder}
                />
            </div>
            <input type="submit" value="Save task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
