import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import css from './TaskEditor.module.css';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text === '') {
      return toast.error('Please enter task text');
    }

    dispatch(addTask(text));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};
