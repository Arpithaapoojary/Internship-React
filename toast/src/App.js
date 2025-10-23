import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
      hello
    </div>
  );
};

// 👇 Add this line to fix the "export default not found" error
export default App;
