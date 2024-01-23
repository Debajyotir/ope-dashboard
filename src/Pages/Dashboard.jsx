import React, { useEffect, useState } from 'react'
import { FiPieChart } from "react-icons/fi";
import { LuTags } from "react-icons/lu";
import { MdOutlineEventRepeat } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import axios from 'axios';

import "../Styles/dashboard.scss"
import BarChartComponent from '../components/BarChartComponent';
import PieChart from '../components/PieChart';
import Popup from '../components/Popup';



const Dashboard = () => {
    const [nav,setNav] = useState('Dashboard');
    const [user,setUser] = useState(null);
    const [popNow,setPopNow] = useState(false);
    const [chartData,setChartData] = useState({});
    const [data,setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://dummy-data-4iir.onrender.com/bar');
            setChartData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://dummy-data-4iir.onrender.com/pie');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, []);

  return (
    <div className='dashboard-outer'>
        <div className='sidebar'>
            <div className='sidebar-top'>
                <div className='dashboard-board'>
                    <h1>Board.</h1>
                </div>
                
                <div className='dashboard-nav'>
                    <div className='dashboard-nav-elements'>
                        <div className='dashboard-nav-elements-icon'> <FiPieChart/> </div>
                        <div className={`${nav==='Dashboard' ? 'dashboard-nav-element-selected' : ''}`}>Dashboard</div>
                    </div>
                    <div className='dashboard-nav-elements'>
                        <div className='dashboard-nav-elements-icon'> <LuTags/> </div>
                        <div className={`${nav==='Transactions' ? 'dashboard-nav-element-selected' : ''}`}>Transactions</div>
                    </div>
                    <div className='dashboard-nav-elements'>
                        <div className='dashboard-nav-elements-icon'> <MdOutlineEventRepeat/> </div>
                        <div className={`${nav==='Schedules' ? 'dashboard-nav-element-selected' : ''}`}>Schedules</div>
                    </div>
                    <div className='dashboard-nav-elements'>
                        <div className='dashboard-nav-elements-icon'> <FaRegCircleUser/> </div>
                        <div className={`${nav==='Users' ? 'dashboard-nav-element-selected' : ''}`}>Users</div>
                    </div>
                    <div className='dashboard-nav-elements'>
                        <div className='dashboard-nav-elements-icon'> <IoIosSettings/> </div>
                        <div className={`${nav==='Settings' ? 'dashboard-nav-element-selected' : ''}`}>Settings</div>
                    </div>
                </div>

            </div>

            <div className='sidebar-bottom'>
                <p className='sidebar-bottom-p'>Help</p>
                <p className='sidebar-bottom-p'>Contact Us</p>
            </div>

        </div>


        <div className='main'>
        
            <div className='main-topbar'>
                <h2>Dashboard</h2>
                <div className='main-topbar-end'>
                    <div className='main-topbar-end-search'>
                        <input placeholder='Search..' className='main-topbar-end-input'/>
                        <div className='main-topbar-end-search-icon'><IoSearchOutline/></div>
                    </div>
                    <div className='main-topbar-end-icons'><CiBellOn/></div>
                    <div className='main-topbar-end-icons'><FaRegCircleUser/></div>
                </div>
            </div>

            <div className='main-second'>
                <div className='main-second-box'>
                    <div className='main-second-box-icon  main-second-box-icon1'><CiMoneyBill/></div>
                    <p>Total Revenues</p>
                    <div className='main-second-box-end'>
                        <h3>$2,129,430</h3>
                        <div className='main-second-box-end-right'>+2.5%</div>
                    </div>
                </div>

                <div className='main-second-box'>
                    <div className='main-second-box-icon  main-second-box-icon2'><LuTags/></div>
                    <p>Total Transactions</p>
                    <div className='main-second-box-end'>
                        <h3>1520</h3>
                        <div className='main-second-box-end-right'>+1.7%</div>
                    </div>
                </div>
                
                <div className='main-second-box'>
                    <div className='main-second-box-icon  main-second-box-icon3'><AiOutlineLike/></div>
                    <p>Total Likes</p>
                    <div className='main-second-box-end'>
                        <h3>9721</h3>
                        <div className='main-second-box-end-right'>+1.4%</div>
                    </div>
                </div>

                <div className='main-second-box'>
                    <div className='main-second-box-icon  main-second-box-icon4'><MdOutlinePeopleAlt/></div>
                    <p>Total Users</p>
                    <div className='main-second-box-end'>
                        <h3>9721</h3>
                        <div className='main-second-box-end-right'>+4.2%</div>
                    </div>
                </div>
            </div>

            <div className='main-third'>
                <h3>Activities</h3>
                <div className='main-third-heading'>
                    <p className='main-third-heading-time'>May - June 2021</p>
                    <div className='main-third-heading-legends'>
                        <div className='main-third-heading-legends1'>
                            <div className='main-third-heading-legends-red'></div>
                            <div className='main-third-heading-legends-name'>Guest</div>
                        </div>
                        <div className='main-third-heading-legends1'>
                            <div className='main-third-heading-legends-green'></div>
                            <div className='main-third-heading-legends-name'>User</div>
                        </div>
                    </div>
                </div>
                <div className='main-third-chart'><BarChartComponent data={chartData} /></div>
            </div>

            <div className='main-last'>
                <div className='main-last-top-products'>
                    <div className='main-last-top-products-heading'>
                        <h3>Top products</h3>
                        <p>May - June 2021</p>
                    </div>
                    <div className='main-last-top-products-buttom'>
                        <div className='main-last-top-products-chart'>
                            <PieChart data={data}/>   
                        </div>
                        <div className='main-last-top-products-legend-list'>
                            <div className='main-last-top-products-legend'>
                                <div className='main-last-top-products-legend-col1'></div>
                                <div className='main-last-top-products-legend-name'>Basic Tees
                                    <p>55%</p>
                                </div>   
                            </div>
                            <div className='main-last-top-products-legend'>
                                <div className='main-last-top-products-legend-col2'></div>
                                <div className='main-last-top-products-legend-name'>Custom Short Pants
                                    <p>31%</p>
                                </div>
                            </div>
                            <div className='main-last-top-products-legend'>
                                <div className='main-last-top-products-legend-col3'></div>
                                <div className='main-last-top-products-legend-name'>Super Hoodies
                                    <p>14%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-last-top-check'>
                    {
                        user===null ? <div className='main-last-null'>
                            <div onClick={()=>setPopNow(true)}><FiPlus /></div>
                        </div> 
                        : <div className='main-last-top-bio'>
                            <h3>{user.name}</h3>
                            <div className='main-last-obj'>
                                <div className='main-last-obj1'>
                                    <div className='main-last-obj-element'>
                                        <div className='main-last-obj-col1'><PiWhatsappLogo/></div>
                                        <div className='main-last-obj-detail'>{user.phone}</div>
                                    </div>
                                    <div className='main-last-obj-element'>
                                        <div className='main-last-obj-col2'><FaInstagram/></div>
                                        <div className='main-last-obj-detail'>{user.insta}</div>
                                    </div>
                                </div>
                                <div className='main-last-obj1'>
                                    <div className='main-last-obj-element'>
                                        <div className='main-last-obj-col3'><CiMail/></div>
                                        <div className='main-last-obj-detail'>{user.email}</div>
                                    </div>
                                    <div className='main-last-obj-element'>
                                        <div className='main-last-obj-col4'><FiYoutube/></div>
                                        <div className='main-last-obj-detail'>{user.youtube}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
            
        {popNow ? <Popup setPopNow={setPopNow} setUser={setUser}/> : ''}

    </div>
  )
}

export default Dashboard