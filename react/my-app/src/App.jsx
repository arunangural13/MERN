
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import axios from 'axios'

import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import News from './components/News'
import Contact from './components/Contact'
import Mission from './components/Mission'
import Layout from './components/layouts/Layout'
import Login from './components/Login'
import Signup from './components/Signup'

import UserDashboard from './components/UserDashboard'
import DonorDashboard from './components/DonorDashboard'
import AdminDashboard from './components/AdminDashboard'

import AddStaff from './components/AddStaff'
import ViewStaff from './components/ViewStaff'
import AddMemberType from './components/AddMemberType'
import ViewMembertype from './components/ViewMemberType'
import AddMember from './components/AddMember'
import ViewMember from './components/ViewMember'
import FundRaise from './components/Fundraise'
import ViewFundRaise from './components/ViewFundRaise'
import Appointment from './components/Appointment'
import ViewAppointment from './components/ViewAppoinment'
import DonorFundraiser from './components/DonorFundraiser'
import DonorAppoinment from './components/Donorappointment'
import ViewDonorAppoinment from './components/ViewDonorAppointment'
import ViewDonor from './components/ViewDonor'


function App() {

  return (
    <>

<BrowserRouter>
<Routes>

<Route path={'/'} element={<Layout/>} >

  <Route path={'/'} element={<Home/>} />
  <Route path={'/About'} element={<About/>} />
  <Route path={'/Donate'} element={<Donate/>} />
  <Route path={'/News'} element={<News/>} />
  <Route path={'/Contact'} element={<Contact/>} />
  <Route path={'/Mission'} element={<Mission/>} />
  <Route path= {'/Login'} element ={<Login/>}/>
  <Route path ={'/Signup'} element= {<Signup/>}/> 
</Route>

<Route path ={'/user/dashboard'} element= {<UserDashboard/>}/> 
<Route path ={'/donor/dashboard'} element= {<DonorDashboard/>}/> 
<Route path ={'/admin/dashboard'} element= {<AdminDashboard/>}/> 

 {/* ADMIN DASHBOARD ROUTES */}
<Route path= {'/addstaff'} element ={<AddStaff/>}/>
<Route path= {'/viewstaff'} element ={<ViewStaff/>}/>
<Route path= {'/AddMembertype'} element ={<AddMemberType/>}/>
<Route path= {'/viewmembertype'} element ={<ViewMembertype/>}/>
<Route path= {'/addmember'} element ={<AddMember/>}/>
<Route path= {'/viewmember'} element ={<ViewMember/>}/>
<Route path= {'/fundraise'} element = {<FundRaise/>}/>
<Route path= {'/viewfundraise'} element = {<ViewFundRaise/>}/>
<Route path= {'/appointment'} element = {<Appointment/>}/>
<Route path= {'/viewappointment'} element = {<ViewAppointment/>}/>

{/* DONOR DASHBOARD ROUTES */}
<Route path ={'/donorfundraiser'} element = {<DonorFundraiser/>}/>
<Route path ={'/donorappointment'} element = {<DonorAppoinment/>}/>
<Route path ={'/viewdonorappointment'} element = {<ViewDonorAppoinment/>}/>

{/* USER DASHBOARD ROUTES */}
<Route path ={'/viewdonor'} element ={<ViewDonor/>}/>

</Routes>
</BrowserRouter>

 </>
  )
}

export default App
