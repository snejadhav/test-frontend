import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import connect from "react-redux/es/connect/connect";



import dashboardRoutes from "routes/dashboard.jsx";
import {store} from '../../index.js';

var ps;
var color = {
    backgroundColor: "black",
};

const mapStateToProps = state => {
    return { data: state };
};

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    console.log("layout:",this.props.data);
    this.state = {
      backgroundColor: "white",
      activeColor: "info",
    }
  }

  render() {
    return (
      <div className="wrapper" style={{backgroundColor:'white',overflowY:'scroll' }}>
        <div className="alert-alert-top-alert-info-text-center" ng-if="::EnvAlertCtrl.isVisible" style={{backgroundColor:"#00a7ff"}}>
          <icon name="information" size="md">
            <svg className="icon icon-information icon-md">

            </svg>
            <h6>You are using an environment for testing and development purposes only - all
              crypto-currencies rates are testnet.</h6>
          </icon>

        </div>
          <h3 style={{color:"#8a9297",fontSize:"16px",paddingLeft:"5.6%",fontFamily:'sans-serif'}}>@ {this.props.data.userName}

          </h3>
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.pro) {
                return null;
              }
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>

        </div>


    );
  }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;
//export default Dashboard;
