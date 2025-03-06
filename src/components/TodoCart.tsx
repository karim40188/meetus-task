const TodoCart = ({
  title,
  description,
  deleteTodo,
  id,
}: {
  title: string;
  description: string;
  deleteTodo: (id:string) => void;
  id: string;
}) => {
  return (
    <div className="p-4 bg-white rounded-md text-slate-900 flex flex-col">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="flex gap-3">
        <button className="bg-blue-400 py-2 px-2 text-white w-[100px]">
          Edit
        </button>
        <button
          onClick={()=>deleteTodo(id)}
          className="bg-red-400 py-2 px-2 text-white w-[100px]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCart;