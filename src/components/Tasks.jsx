import Task from './Task';

const Tasks = ({ tasks, onDelete, onEdit, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
