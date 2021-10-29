import React from 'react';

class BlogItem extends React.Component{
    render(){
        return(
            
            <div className="card">
              <div className="card-header">
                <img src="https://www.bitcoin.com/images/uploads/get-started-what-is-bitcoin-lg@2x.png" alt="" />
              </div>
              <div className="card-body">
                <h4>BTC</h4>
                <p>
                  Will add soon.
                </p>
                <div className="user">
                  <img src="https://avatars.githubusercontent.com/u/82590387?v=4" alt="" />
                  <div className="user-info">
                    <h5>Tejas Tank</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default BlogItem;