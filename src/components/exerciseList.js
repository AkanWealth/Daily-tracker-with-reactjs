import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        // console.log(error);
      });
  }
  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then((res) => {
      // console.log(res.data);

      this.setState({
        exercises: this.state.exercises.filter((el) => el._id !== id),
      });
    });
  }
  render() {
    return (
      <div className="exercise-list">
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="table-secondary">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map((exercise) => (
              <tr key={exercise._id}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td>
                  <Link
                    to={"/edit/" + exercise._id}
                    className="btn btn-primary me-3 "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      this.deleteExercise(exercise._id);
                    }}
                    className="btn btn-danger my-auto"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
