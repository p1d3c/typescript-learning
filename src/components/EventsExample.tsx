import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const clickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (evt: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type='text' placeholder='Управляемый' />
      <input ref={inputRef} type='text' placeholder='Неуправляемый' />
      <button onClick={clickHandler}>click me</button>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}
      ></div>
    </div>
  );
};

export default EventsExample;
