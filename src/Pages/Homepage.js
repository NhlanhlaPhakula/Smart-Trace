import React from 'react';
import Profile from './Profile';
import Report from './Report';
import Settings from './Settings';
import ContactUs from './ContactUs';
import Registration from './Registration';
import Email from './Email';
import IdNumber from './IdNumber';
import Tab from './Tabs';
import TrackTrace from './TrackNTrace';
import Store from './OnlineStore';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Homepage = ({handleLogout, openMenu, closeMenu}, props) => {
    const {email, setEmail} = props;
    return(
        <div>
        <section className="hero">
            <nav>
            <div className="brand">
                <button  onClick={openMenu}>
                    &#9776;
                </button>
                
            </div>
                <aside className="sidebar">
                    {//<h1 value={email} onChange={e=> setEmail(e.target.value)}>User: </h1>
                    
                    //<input type="text" value={email} onChange={e=> setEmail(e.target.value)} />
                    }
                    <h3>Extra Functions</h3>
                    
                    <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                    <BrowserRouter>
                    
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/settings">Settings</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/report">Report</a>
                        </li>
                        <li>
                            <a href="/contactUs">Contact Us</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/covid-19">Covid-19</a>
                        </li>
                        <li>
                            <a href="/investors">Investors</a>
                        </li>
                        <li>
                            <a href="/admin">Admin</a>
                        </li>
                    </ul>
                    </BrowserRouter>
                </aside>
                <h2>SMART TRACE</h2>
                <button onClick={handleLogout}>Login</button>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <BrowserRouter>
            <main className="main">
               
               <div className="content">
                   <switch>
                       <Route path="/" exact={true} component={Tab}/>
                       <Route path="/trackNtrace" exact={true} component={TrackTrace}/>
                       <Route path="/profile" exact={true} component={Profile} />
                        <Route path="/settings" exact={true} component={Settings} />
                        <Route path="/report" exact={true} component={Report}/>
                        <Route path="/contactUs" exact={true} component={ContactUs}/>
                        <Route path="/registration" exact={true} component={Registration} />
                        <Route path="/email" exact={true} component={Email}/>
                        <Route path="/identity" exact={true} component={IdNumber}/>
                        <Route path="/store" exact={true} component={Store}/>
                   </switch>
                   
               </div>
           
             </main>
            </BrowserRouter>
            
        </section>
        <footer  className="footer">
                All rights reserved.
        </footer>
    </div>
    );
};
export default Homepage;