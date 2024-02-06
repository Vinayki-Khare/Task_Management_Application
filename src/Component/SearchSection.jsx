import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_SEARCH_DATE,
  SET_SEARCH_STATUS,
  SET_SEARCH_TEXT,
  UPDATE_SEARCH_RESULT,
} from "../redux/ExpFuncTypes";
import moment from "moment";

const SearchSection = () => {
  const dispatch = useDispatch();
  const { taskList, searchText, searchDate, searchStatus } = useSelector(
    (state) => state.taskStore
  );

  const handleSearchTask = (text) => {
    dispatch({ type: SET_SEARCH_TEXT, payload: text });
    let cpyTaskList = [...taskList];
    dispatch({
      type: UPDATE_SEARCH_RESULT,
      payload: cpyTaskList.filter((e) =>
        e.title.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  const handleSearchStatus = (status) => {
    dispatch({ type: SET_SEARCH_STATUS, payload: status });
    let cpyTaskList = [...taskList];
    dispatch({
      type: UPDATE_SEARCH_RESULT,
      payload: cpyTaskList.filter((e) =>
        e.status.toLowerCase().includes(status.toLowerCase())
      ),
    });
  };

  const handleSearchTaskByDate = (date) => {
    dispatch({ type: SET_SEARCH_DATE, payload: date });
    let cpyTaskList = [...taskList];
    dispatch({
      type: UPDATE_SEARCH_RESULT,
      payload: cpyTaskList.filter((item) =>
        moment(item.dueDate).isSame(date, "day")
      ),
    });
  };


  return (
    <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'row' }}>
      <div className="form-group d-flex" style={{ gap: "10px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Task by Name"
          value={searchText}
          onChange={(e) => handleSearchTask(e.target.value)}
        />
        <input
          type="status"
          className="form-control"
          placeholder="Search Task by Status"
          value={searchStatus}
          onChange={(e) => handleSearchStatus(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          placeholder="Search task by due date"
          value={searchDate}
          onChange={(e) => handleSearchTaskByDate(e.target.value)}
        />
        
      </div>
    
    </div>
  );
};

export default SearchSection;
