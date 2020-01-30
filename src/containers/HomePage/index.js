import React from "react";
import CategoryList from "../../components/CategoryList";
import HomePageHeader from "../../components/HomePageHeader";
class HomePage extends React.PureComponent{
    render(){
        return (
        <>
          <HomePageHeader/>
          <CategoryList/>
          </>
        )
    }
}
export default HomePage;