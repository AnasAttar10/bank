import "./App.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Transcations from "./components/Transcations/Transcations";
import Operations from "./components/Operations/Operations";
import Nav from "./components/Nav/Nav";
import Category from "./components/Category/Category";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      newTranscation: {},
      categories: "",
      isDeposit: false,
      Balance: 0,
    };
  }

  clculateBalance = async () => {
    let data = [...this.state.data];
    let Balance = 0;
    data.map((d) => {
      Balance += d.amount;
    });
    this.setState({ Balance });
  };

  Deposit = () => {
    this.setState({ isDeposit: true });
  };

  Withdraw = () => {
    this.setState({ isDeposit: false });
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    let amount = e.target.elements[0].value;
    let vendor = e.target.elements[1].value;
    let category = e.target.elements[2].value;
    if (!this.state.isDeposit) amount = amount * -1;
    let newTranscation = { amount, vendor, category };
    const response = await this.insertTransaction(newTranscation);
    await this.clculateBalance();
    await this.getCategories();
  };

  delete = async (id) => {
    const response = await this.deleteTransaction(id);
    const getResponse = await this.getTransactions();
    this.setState({ data: getResponse.data }, () => {
      this.clculateBalance();
      this.getCategories();
    });
  };

  async deleteTransaction(id) {
    return axios.delete("http://localhost:8080/transaction/" + id);
  }

  async insertTransaction(transaction) {
    return axios
      .post("http://localhost:8080/transaction", transaction)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  }

  getCategories = async () => {
    let response = await axios.get("http://localhost:8080/categories");
    this.setState({ categories: response.data });
  };

  async getTransactions() {
    return axios.get("http://localhost:8080/transactions");
  }
  async componentDidMount() {
    const response = await this.getTransactions();
    this.setState({ data: response.data }, () => {
      this.clculateBalance();
      this.getCategories();
    });
  }

  render() {
    return (
      <div className="App">
        <Nav Balance={this.state.Balance} />
        <Routes>
          <Route
            path="/"
            element={
              <Transcations data={this.state.data} delete={this.delete} />
            }
          ></Route>
          <Route
            path="/operations"
            element={
              <Operations
                Deposit={this.Deposit}
                Withdraw={this.Withdraw}
                handelSubmit={this.handelSubmit}
              />
            }
          ></Route>
          <Route
            path="/category"
            element={<Category categories={this.state.categories} />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
