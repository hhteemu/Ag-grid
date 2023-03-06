import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

function TodoTable(props) {

    const columns = [
        { field: "date" , sortable: true , filter: true },
        { field: "desc" , sortable: true , filter: true },
        { field: "prio" , sortable: true , filter: true,
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} }]

    return (
    <div className="ag-theme-material"
    style={{height: '700px', width: '70%', margin: 'auto'}} >
    <AgGridReact
    ref={props.gridRef}
    onGridReady={params => props.gridRef.current = params.api}
    rowSelection="single"
    columnDefs={columns}
    rowData={props.todos}>
    </AgGridReact>
    </div>
    )}

export default TodoTable;
