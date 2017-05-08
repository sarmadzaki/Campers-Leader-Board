import React from "react";
import $ from 'jquery';
import "../App.css";
import '../bootstrap.css';
class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            list: "last30"
        }
    }

    componentWillMount() {
        var _this = this;
        $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function (json, textStatus) {
            _this.setState({ data: json });
        });
    }

    getLast30() {
        var _this = this;
        $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function (json, textStatus) {
            _this.setState({ data: json, list: "last30" });
        });
    }

    getAllTime() {
        var _this = this;
        $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function (json, textStatus) {
            _this.setState({ data: json, list: "alltime" });
        });
    }

    render() {
        var listHTML = this.state.data.map(function (item, i) {
            return (
                <tr key={item.username} className={(i + 1) % 2 === 0 ? "even" : "odd"}>
                    <td>
                        {i + 1}
                    </td>
                    <td>
                        <img src={item.img} alt={item.username} />
                        <a href={"https://www.freecodecamp.com/" }>{item.username}</a>
                    </td>
                    <td>
                        {item.recent}
                    </td>
                    <td>
                        {item.alltime}
                    </td>
                </tr>
            );
        });
        var _this = this;
        return (
            <div id="content table-responsive">
                <p id="heading">Leaderboard</p>
                <table className="table">
                    <thead>
                        <tr className="even">
                            <td>#</td>
                            <td>Camper</td>
                            <button className="btn btn-outline-success" onClick={(e) => _this.getLast30()}>Points in last 30 days</button>
                            <button className="btn btn-outline-success" onClick={(e) => _this.getAllTime()}>All time points</button>
                        </tr>
                    </thead>
                    <tbody>
                        {listHTML}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Main;
