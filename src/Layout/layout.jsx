import React from "react";

const Layout = ({children}) => {

    return (
        <>
            <header></header>
                {/* <div className="container"> */}
                    {children}
                {/* </div> */}
            <footer></footer>
        </>
    )
}

export default Layout;