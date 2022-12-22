import React from 'react'

const Layout3 = () => {
    return (
        <div>
            <div className="header">
                <h2>Card 1</h2>
            </div>

            <div className="row">
                <div className="column side">
                    <br /><br /><br />
                    <h2>Card 2</h2>
                    <br /> <br /> <br />
                </div>

                <div className="column middle">
                    <br /><br /><br />
                    <h2>Card 3</h2>
                    <br /><br /><br />
                </div>

                <div className="column side">
                    <br /><br /><br />
                    <h2>Card 4</h2>
                    <br /><br /><br />
                </div>
            </div>

            <div className="footer">
                <h2>Card 5</h2>
            </div>
        </div>
    )
}

export default Layout3



