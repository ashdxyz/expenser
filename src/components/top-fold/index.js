import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./top-fold.css";
import add from '../../../src/assets/icons/add32.png';
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
import cancel from "../../assets/icons/cancel32.png"
import back from "../../assets/icons/back32.png"
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
        <div className="page-title">
           Daily Expenses
        </div>
          <div className="searchbar">
            <i class="fi-rr-search"></i>
            <input
              placeholder="Search you Expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
            <img src={add} alt="Add" className="add-icon" />
            <label className="icon-button-label">Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <img src={back} alt="back-buttton"/>
              <label className="icon-button-label">Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <img src={cancel} alt="cancel-icon"/>
              <label className="icon-button-label">Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
