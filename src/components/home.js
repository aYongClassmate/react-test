import React, { Component } from 'react'
class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render () {
        return (
            <div className="hello">

    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="10000">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
        <div className="carousel-inner">
            <div className="item active">
                
            </div>
            <div className="item">
            </div>
            <div className="item">
                
            </div>
        </div>
        <a className="carousel-control left" href="#myCarousel" 
            data-slide="prev">&lsaquo;
        </a>
        <a className="carousel-control right" href="#myCarousel" 
            data-slide="next">&rsaquo;
        </a>
    </div>
    <div className="banxin Module">
        <div className="container-fluid">
            <h1 className="h2 text-center p3 margin-top-md-0 margin-bottom-md-xl margin-bottom-sm-l margin-top-4xl margin-bottom-l theme">星星送是什么？</h1>
            <div className="row">
                用专业的培训确保<span className="important">服务至上</span>理念落地，致力于服务行动不便人群在出院、转院、
                康复回家等场景的<span className="important">互联网转运平台</span>互联网转运平台
            </div>
        </div>
        <div className="row  text-center">
            <div className="col-md-4 col-sm-6 col-xs-12 contentPic ">
                
                <a href="">电话微信预约</a>
                <p>您可拨打4008986666 或 微信公众号"星星送" 方便找到我们</p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 contentPic">
                
                <a href="">为您量身定制转运方案</a>
                <p>我们提供专业的客服为您量身定制转运方案</p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 contentPic">
                
                <a href="">服务规范，售后完善</a>
                <p>专业人员设备为您服务，订单状态全程提醒</p>
            </div>

        </div>
    </div>
    <div className=" Module text-center Column">
        <div className="banxin">
            <div className="container-fluid" >
                <h1 className="h2 p3 margin-top-md-0 margin-bottom-md-xl margin-bottom-sm-l margin-top-4xl margin-bottom-l theme">星星送做什么？</h1>

            </div>
            <div className="row  ">
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 fl-left  " >
                    <div className=" contentPic text-center DoLeftDiv" >
                        <div className="DoDiv" >健康出行</div>
                        <span className="text-center DoTitleText"> 为行动不便人群，解决出行困难问题。</span>
                        <div className="DOmedia row" >

                            <div className="media-left col-md-12 col-xs-12 col-sm-6 col-lg-6">
                                <a href="javascript:void(0);">
                                   

                                </a>
                            </div>
                            <div className="DOmedia-body col-md-12 col-xs-12 col-sm-6 col-lg-6" >
                                <div className="DoNote">
                                    设备标准：商务车 <br/>
                                    人员标准：司机<br/>
                                    服务范围：无需医疗处置也无需搬抬的用户
                                </div>

                            </div>
                        </div>
                        <div className="DOmedia row" >

                            <div className="media-left col-md-12 col-xs-12 col-sm-6 col-lg-6">
                                <a href="javascript:void(0);">


                                </a>
                            </div>
                            <div className="DOmedia-body col-md-12 col-xs-12 col-sm-6 col-lg-6 img-responsive" >
                                <div  className="DoNote">

                                    设备标准：商务车<br/>
                                    人员标准：司机+ 护送员（数量可选）<br/>
                                    服务范围：无需医疗处置但需要搬抬的用户
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12  col-lg-6 fl-right ">
                    <div className=" contentPic text-center fl-right" >
                    <div className="DoDiv" >医疗护送</div>
                        为了病患解决，出院/转院需要特殊设备，医疗救护转运问题。
                        <div className="DOmedia row" >

                            <div className="media-left col-md-12 col-xs-12 col-sm-6 col-lg-6">
                                <a href="javascript:void(0);">
                                    
                                </a>
                            </div>
                            <div className="DOmedia-body col-md-12 col-xs-12 col-sm-6 col-lg-6" >
                                <div  className="DoNote">

                                    设备标准：救护车<br/>
                                    人员标准：司机 + 护士 + （护送员可选）<br/>
                                    服务范围：需要车上医疗处置的非重症用户
                                </div>

                            </div>
                        </div>
                        <div className="DOmedia row" >

                            <div className="media-left col-md-12 col-xs-12 col-sm-6 col-lg-6">
                                <a href="javascript:void(0);">

                                </a>
                            </div>
                            <div className="DOmedia-body col-md-12 col-xs-12 col-sm-6 col-lg-6" >
                                <div  className="DoNote">
                                    设备标准：救护车<br/>
                                    人员标准：司机 + 医生 + （护送员可选）<br/>
                                    服务范围：需使用呼吸机、输液泵、注射泵、负压担架、带引流瓶的病人。
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                    </div>
                </div>

            </div>
        </div>
  

        )
    }
}
export default Home;