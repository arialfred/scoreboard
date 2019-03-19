import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Row, Col } from "reactstrap";

class ScoreList extends React.Component {
    columnDefs = [
        {headerName: "Name", field: "name", sortable: true},
        {headerName: "Score", field: "score", sortable: true}
        ];

    render() {
        if (this.props.error == null) {
            return (
                <div>Loading scores...</div>
            )
        }

        if (this.props.error) {
            return (
                <div>Error getting scores. Please try again later.</div>
            )
        }

        if (this.props.scores.length === 0) {
            return (
                <div>No scores.</div>
            )
        }

        return (
            <div className="ag-theme-balham">
                <Row>
                    <Col md={5}>
                        <AgGridReact
                            columnDefs={this.columnDefs}
                            rowData={this.props.scores} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ScoreList;
