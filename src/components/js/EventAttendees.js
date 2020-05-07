import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import EventAttendee from './EventAttendee';
import '../css/EventAttendees.css';

let first = true;

class EventAttendees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: this.props.attendees,
      elements: [],
      perPage: 10,
      currentPage: 0,
    };
    this.state.pageCount = Math.ceil(this.props.attendees.length / this.state.perPage);
  }

  setElementsForCurrentPage() {
    let elements = this.state.data
    .slice(this.state.offset, this.state.offset + this.state.perPage)
    .map(a => {
      console.log(a);
      return (<EventAttendee name={this.props.name} attendee={a}/>)}
    );
    this.setState({ elements: elements });
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  }
  
  render() {
    if(first) {
      first = false;
      this.setElementsForCurrentPage();
    }
    let paginationElement;
    if (this.state.pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={<span className="gap">...</span>}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageClick}
          forcePage={this.state.currentPage}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_page"}
          nextLinkClassName={"next_page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      );
    }
    return (
      <div className="event-attendees">
        {paginationElement}
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Checked In</th>
          </tr>
          {this.state.elements}
        </table>
      </div>
    );
}
}

export default EventAttendees;