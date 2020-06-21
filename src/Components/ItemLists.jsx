import React,{Component} from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';
import Header from './Header';
 
const data = [
    { id: 1, title: 'Mouse', products: '5' ,district:'Dhaka'} ,
    { id: 2, title: 'keyboard', products: '6' ,district:'Dhaka'} ,
    { id: 3, title: 'Monitor', products: '6' ,district:'Dhaka'} ,
    { id: 4, title: 'Processor', products: '3' ,district:'chittagong'} ,
    { id: 5, title: 'Motherboard', products: '5' ,district:'Dhaka'} ,
];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Products',
    selector: 'products',
    sortable: true,
  },
  {
    name: 'District',
    selector: 'district',
    sortable: true,
  },
];
 
class ItemLists extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3" style={{borderLeft:'1px solid #ccc'}}>
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        <DataTable
                            title="Item Lists"
                            columns={columns}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default ItemLists;
 