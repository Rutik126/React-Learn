import { useState } from "react";

const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...task];
    CopyTask.push({title,details})

    setTask(CopyTask)
    console.log(CopyTask);

    setTitle('')
    setdetails('')
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-6 max-w-7xl mx-auto">
        
        {/* Left Form Section */}
        <form
          onSubmit={submitHandler}
          className="w-[30%] bg-white p-5 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-amber-800">
            Create Note
          </h2>

          <input
            className="w-full p-3 border-2 rounded-xl border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text"
            placeholder="Title"
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          <textarea
            className="w-full mt-3 p-3 border-2 rounded-xl border-amber-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Write your note..."
            onChange={(e)=>{
              setdetails(e.target.value)
            }}
          />

          <button
            className="w-full mt-4 bg-amber-800 p-3 rounded-xl uppercase text-amber-50 text-lg hover:bg-amber-900 transition"
          >
            Create Note
          </button>
        </form>

        {/* Right Notes Grid */}
        <div className="w-[70%] grid grid-cols-2 md:grid-cols-3 gap-6">
        {task.map((item,index)=>{
          <div
            key={index}
              className="bg-amber-100 rounded-2xl border-2 border-amber-900 p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-amber-900 mb-2">
                {item.title}
              </h3>
              <p className="text-amber-800 text-sm">
                {item.details}
              </p>
            </div>
        })}
        </div>

      </div>
    </div>
  );
};

export default App;
