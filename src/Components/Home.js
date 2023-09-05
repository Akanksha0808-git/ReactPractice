import React from 'react'
import { Link } from 'react-router-dom'
const home = () => {

    return (
        <div>
            Home
            <Link to='/about'>
<button>
    click Here
</button>

            </Link>
        </div>
    )


}
export default home;
