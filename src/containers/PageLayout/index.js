import React from "react";

class PageLayout extends React.PureComponent{
    constructor(props)
    {
        super(props);
    }
    getHeader=()=>{
        return (
            <div>
                this is the header
            </div>
        )
    }
    render () {
        return (
            <div>
                {this.getHeader()}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default PageLayout;