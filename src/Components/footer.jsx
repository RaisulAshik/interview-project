import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <div className="footer_div mt-3" style={{ paddingTop: "20px" }}>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-1" ></div>
                        <div className="col-md-3 service ">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <div className="">
                                        <div className="footer_font"> Privacy-policy</div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="footer_font"> terms-conditions</div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="footer_font">> Laws-regulations</div>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>

                        <div className="col-md-4 service ">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <div className="">
                                        <div className="footer_font">Transaction-flow</div>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>

                        <div className="col-md-4 service ">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-5">
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default  Footer ;