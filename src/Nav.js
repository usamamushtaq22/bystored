import React from 'react'

const Nav = () => {
    return (
        <>
            <div className='navlist'>
                <h1 className='stor'>STORED</h1>
                <nav className='navbar'>
                    <ul>
                        <li>PERSONAL STORAGE</li>
                        <li>BUSINESS STORAGE</li>
                        <li>MOVING HOME STORAGE</li>
                        <li>LOCATIONS</li>
                        <li>HOW STORED WORKS</li>
                        <li>FAQS</li>





                    </ul>
                    <div className='header-login-col'>
                        <ul className='desktop-menu'>
                            <li className='login-btn'>
                                <a href='https://www.bystored.com/login?v=34' title="Log in">Sign in</a>
                            </li>
                            {/* <button>Sign in</button> */}


                            <button className='book'>Book Online</button>
                        </ul>
                    </div>
                </nav>

            </div>


        </>
    );
}

export default Nav