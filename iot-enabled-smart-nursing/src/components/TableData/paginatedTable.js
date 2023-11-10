import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = ({ rows, columns }) => {
    const data = {
        rows: rows,
        columns: columns
    };

    return (
        <MDBDataTable
            bordered
            small
            noRecordsFoundLabel='No records found'
            noBottomColumns
            data={data}
        />
    );
}

export default DatatablePage;