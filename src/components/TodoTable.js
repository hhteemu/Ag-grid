import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

function TodoTable(props) {

    const columns = [
        { field: "date" , sortable: true , filter: true , floatingFilter: true},
        { field: "desc" , sortable: true , filter: true , floatingFilter: true},
        { field: "prio" , sortable: true , filter: true , floatingFilter: true,
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} }]

    const gridOptions = {
        animateRows: true
    }

    return (
    <div className="ag-theme-material"
    style={{height: '700px', width: '70%', margin: 'auto'}} >
    <AgGridReact
    ref={props.gridRef}
    onGridReady={params => props.gridRef.current = params.api}
    rowSelection="single"
    columnDefs={columns}
    rowData={props.todos}
    gridOptions={gridOptions}>
    </AgGridReact>
    </div>
    )}

export default TodoTable;
