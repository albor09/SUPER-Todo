import "./App.css";
import SideNav from "./components/SideNav";
import WorkSpace from "./components/WorkSpace";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTodoListModal from "./components/Modals/AddTodoList";
import AddTodoModal from "./components/Modals/AddTodo";
import { useAppSelector } from "./app/hooks";
import { selectAddTodoListModal } from "./components/Modals/AddTodoList/slice";
import { selectAddTodoModal } from "./components/Modals/AddTodo/slice";

function App() {
  const addTodoListModalState = useAppSelector(selectAddTodoListModal);
  const addTodoModalState = useAppSelector(selectAddTodoModal);

  return (
    <div className="App">
      <SideNav></SideNav>
      <WorkSpace></WorkSpace>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AddTodoListModal isOpen={addTodoListModalState.isOpen}></AddTodoListModal>
      <AddTodoModal isOpen={addTodoModalState.isOpen}></AddTodoModal>
    </div>
  );
}

export default App;
