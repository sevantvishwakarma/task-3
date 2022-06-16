// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import Product from './products.json';
import { useState } from "react";
import{Table} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
// import { render } from '@testing-library/react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handlePageClick = () => {
    console.log('clicked')
  }

  
  
  console.log(Product);
  return (

    <div className='data'>
      <div className='search mb-5' input>
        <input type="text" placeholder='Search..' onChange={(event) => { setSearchTerm(event.target.value) }} />
      </div>
        {/* <Button varient="outline-primary"> Previous </Button>{' '}
        <Button varient="outline-primary"> Next </Button>{' '} */}

      <Table>

        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>vendor</td>
            <td>product_type</td>
            <td>status</td>
          </tr>
        </thead>
        

        {
          Product.products.filter((x) => {
            if(searchTerm == ""){
              return x
            } else if(x.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return x
            }
          }).map(x => {
            return (

                <>
                <tbody>
                <tr>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.vendor}</td>
                  <td>{x.product_type}</td>
                  <td>{x.status}</td>

                </tr>
                </tbody>
                </>
            )
          })
        }
        
        <ReactPaginate 
          previousLabel = {'Previous'}
          nextLabel = {'Next'}
          breakLabel = {'...'}
          pageCount = {'6'}
          marginPagesDisplayed = {'3'}
        />
      
      </Table>
    </div>


  );

}

export default App;
