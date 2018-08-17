import React, { Component } from "react";
import "toastr/build/toastr.min.css";

export class PreviousNotes extends Component {
  render() {
    return (
      <div className="container">
        <div className={"text-xs-center center text-center centering"}>
          <div className={"alert alert-info"}>
            <p>Below are all of your old notes.</p>
            <p>
              Click the "Modify" button to Edit / Delete your desired note
              entry.
            </p>
            <p>
              The current Month's entries are green, and previous/future request
              are yellow.
            </p>
          </div>
        </div>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date Created</th>
              <th scope="col">Date Updated</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Something New</th>
              <td>09/12/2017</td>
              <td>08/22/2018</td>
              <td>You Are my sunshine, my only sunshine</td>
              <td></td>
            </tr>
            <tr>
            <th scope="row">Something New</th>
              <td>09/12/2017</td>
              <td>04/03/2018</td>
              <td>You Are my sunshine, my only sunshine</td>
              <td></td>
            </tr>
            <tr>
            <th scope="row">Something New</th>
              <td>09/12/2017</td>
              <td>08/22/2018</td>
              <td>You Are my sunshine, my only sunshine</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
