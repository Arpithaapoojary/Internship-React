import toast, { Toaster } from "react-hot-toast";

// 1. Success Toast
const notifySuccess = () => toast.success("Successfully created!");

// 2. Error Toast
const notifyError = () => toast.error("This didn't work. Check your network.");

// 3. Loading Toast (updates after 2s)
const notifyLoading = () => {
  const loadingToastId = toast.loading("Processing your request...");
  setTimeout(() => {
    toast.success("Data loaded!", { id: loadingToastId });
  }, 2000);
};

// 4. Promise Toast (updates based on the Promise's result)
const myPromise = new Promise((resolve, reject) => {
  // Simulating a successful network call after 3 seconds
  setTimeout(() => resolve("Profile saved successfully!"), 3000);
  // To test the error toast, replace the line above with:
  // setTimeout(() => reject("Database connection failed!"), 3000);
});

const notifyPromise = () =>
  toast.promise(myPromise, {
    loading: "Saving your profile...",
    success: (data) => data,
    error: (err) => err,
  });

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Toast Notification Examples</h1>
      <button onClick={notifySuccess} style={{ margin: "5px" }}>
        Show Success Toast
      </button>
      <button onClick={notifyError} style={{ margin: "5px" }}>
        Show Error Toast
      </button>
      <button onClick={notifyLoading} style={{ margin: "5px" }}>
        Show Loading/Update Toast
      </button>
      <button onClick={notifyPromise} style={{ margin: "5px" }}>
        Show Promise Toast (3s)
      </button>

      {/* The Toaster component is required to display all toasts */}
      <Toaster />

      <p>hello arpitha hii</p>
      <b>hello</b>
      <div>
        <h1>hii</h1>
      </div>
    </div>
  );
};

export default App;
