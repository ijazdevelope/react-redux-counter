import React, { useState } from 'react'

const HocFunction = () => {
    const [gunShots, setGunShots] = useState(0)

    const handleGunShots = () => {
        console.log(gunShots)
        // this.setState({ gunshots: this.state.gunshots + 1 })
    }
    return (
    <div>
            <h3 onClick={handleGunShots}>Total GunShots  </h3>
    </div>
  )
}

export default HocFunction


// import React, { Component } from 'react'

// const Army = Men => {
//     class NewMen extends Component {
        
//         render() {
//             return (
//                 <>
//                     <Men
//                         hocGunName={'ak407'}
//                         hocGunShots={this.state.gunshots}
//                         handleGunShots={this.handleGunShots}
//                     />
//                 </>
//             )
//         }
//     }
//     return NewMen;
// }
// export default Army;