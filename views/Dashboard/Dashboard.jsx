import React from "react";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";
import {store} from '../../index.js';
import uphold from '../../assets/uphold.jpg';


const mapStateToProps = state => {
    return { data: state };
};
function updateID(id) {
    store.dispatch({type:'updateData',payload:id});
}

class Dashboard extends React.Component {

    state={
        assetCards:[],
        totalAssets:null,
        arr:[]
    };

    constructor(props){
        super(props);
        this.IsEmpty=true;
        console.log("user id:",this.props.data.id);
        console.log("dashboard state data:",this.props.data);
        updateID(this.props.match.params.id);
    }


    static handleSubmit() {
        console.log("clicked");
    }

    async componentDidMount(){
        await axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/dashboard',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    data: {userId: this.props.data.id},
                    userId: this.props.data.id,
                    assetCards: response.data.assetCards,
                    userName: response.data.userName,
                    totalAssets: response.data.totalAssets,

                });
                store.dispatch({type:'updateUser',payload:response.data.userName});
            },this.forceUpdate())
            .catch(error => {
                console.log(error);
            });
    }
    render() {


        return (
            <div className="content" style={{marginTop: 18, marginLeft: 70, marginRight: 70}}>
                <div className="row">
                    <div style={{backgroundColor: "#753800",width:"1800px",
                    height: "130px",
                    marginTop:"1px" }}>
                        <p style={{ color:"grey",marginLeft:"40px",marginTop:"50px",fontSize:"16px"}}>Available balance</p>
                        <h3 style={{color:"white",marginLeft:"40px"}}>{this.state.totalAssets}</h3>



                    </div>
                    <div className="container" style={{backgroundColor:"#00a7ff",marginTop:"55px",width:"1200px",height:"130px"}}>
                        <button type="button" className="btn  btn-sm" style={{backgroundColor:"white",color:"blue"}}>Learn more</button>


                    </div>




                    <div className="row" style={{marginLeft:5, marginTop:50}}>
                        {this.state.assetCards.map((dynamicComponent, i) => {
                            console.log("component:",dynamicComponent);
                            return(
                                <div className="col-4">
                                    <div className="col" >
                                        <div className="card" style={{"border-radius" :"1px" , width:"300px",height:"175px",boxShadow: 'none', backgroundImage:"url("+require('../../assets/uphold-images/cards/vintage/'+dynamicComponent.currency.toLowerCase()+'.jpg')+")",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                                            <div className="card-header text-center" >
                                                <h4 className="card-title"
                                                    style={{color: 'white', textAlign: 'start', paddingLeft: 10, marginBottom: 0}}>

                                                </h4>
                                            </div>
                                            <div className="card-content" style={{height: 100,align:'center',fontSize:20}}>
                                                <strong style={{color: 'white'}}>   {dynamicComponent.currency}<br/>
                                                    {dynamicComponent.amt}<br/><br/></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>

        );
    }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;

