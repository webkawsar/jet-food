import { Container } from '@material-ui/core';
import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';




const Profile = () => {

    const history = useHistory();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
  
        axios.get("/orders")
        .then(response  =>{

            setOrders(response.data)
        })
        .catch(error => console.log(error.response.data.error))

        
    }, [])
  
  
  
    const handleDelete = (event, rowData) => {
  
      // fetch("http://localhost:5000/api/v1/orders")
      // .then(response => response.json())
      // .then(result => setOrders(result))
      // .catch(error => console.log(error))
      
  
      alert("Delete API not create")
      console.log(rowData);
  
    }
  

    return (
        <div>
            <Container>
                {
                     orders.length ? <h1 style={{textAlign: "center", color: "green"}}>Welcome, {` ${orders[0].user.firstname} ${orders[0].user.lastname} `}</h1>
                     :
                     <h1 style={{textAlign: "center", color: "green"}}>Welcome</h1>
                }
                
                <MaterialTable
                    title="All Orders"
                    
                    columns={[
                        
                        { title: 'ID', field: "_id", align: "center"},
                        { title: 'Name', field: 'user.firstname', align: "center"},
                        { title: 'Email', field: 'user.email', align: "center"},
                        { title: 'Phone', field: 'user.phone', align: "center"},
                        { title: 'Status', field: 'status', align: "center"},
                        
                    ]}

                    data={ orders?.map(order => order) }
                
                    options={{
                        actionsColumnIndex: -1,
                        sorting: true,
                    }}
                    
                />
            </Container>
        </div>
    );
};

export default Profile;