import React from 'react'
import './UserData.css'

function UserData() {
  return (
    <div className='udt'><h1 className='ahm'>User List</h1>
    <h3 className='ult'>User Data</h3>
    <table className='userlisttable'>
  <tr>
  <th>User ID</th>
  <th>Username</th>
  <th>Email</th>
  <th>Remove</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Vaishnima</td>
    <td>vaishnima@gmail.com</td>
    <td><button className='blk'>Block</button></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Nikhitha</td>
    <td>nikhitha@gmail.com</td>
    <td><button className='blk'>Block</button></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Aasa</td>
    <td>aasa@gmail.com</td>
    <td><button className='blk'>Block</button></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Afeefa</td>
    <td>afeefa@gmail.com</td>
    <td><button className='blk'>Block</button></td>
  </tr>
 </table>
        </div>
  )
}

export default UserData