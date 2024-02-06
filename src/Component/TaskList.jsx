import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DELETE_TASK_ID, UPDATE_EDIT_TASK } from "../redux/ExpFuncTypes";
import moment from "moment";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{width:'60%',marginLeft:"20%",marginBottom:"2%"}}>
        <h5 class="card-header"># Task {task.title}</h5>

      <div className="card-body">
       <div className="d-flex justify-content-between">
       <p className="card-text"><strong>Description : </strong>{task.description}</p>
        <p className="card-text">
          <strong>Due Date:</strong> {moment(task.dueDate).format("DD MMM YYYY")}
        </p>
        <p className="card-text">
          <strong>Status:</strong>{" "}
          {task.status === "Progress" ? (
            <span >{task.status}</span>
          ) : task.status === "Completed" ? (
            <span >{task.status}</span>
          ) : (
            task.status === "Pending" && (
              <span >{task.status}</span>
            )
          )}
        </p>
       </div>
        <div style={{ display: "flex", gap: "10px" }} className="d-flex justify-content-end">
          <button
            data-bs-toggle="modal"
            data-bs-target="#taskmodal"
            className="btn btn-primary"
            onClick={() => {
              dispatch({
                type: UPDATE_EDIT_TASK,
                payload: { ...task },
              });
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deletemodal"
            onClick={() =>
              dispatch({ type: SET_DELETE_TASK_ID, payload: task.id })
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskList = () => {
  const dispatch = useDispatch();
  const { taskList, searchText, searchResult, searchDate , searchStatus } = useSelector(
    (state) => state.taskStore
  );
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      searchText.length > 0 || searchDate.length > 0 || searchStatus.length > 0
        ? [...searchResult]
        : [...taskList]
    );
  }, [searchText, taskList, searchDate,searchStatus]);

  return (
    <div className="card-container">
      {list.length === 0 ? (
        <h3 class="text-center">No Task Available!</h3>
      ) : (
        list.map((task, index) => (
          <TaskCard key={`task-${task.id}`} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList;

