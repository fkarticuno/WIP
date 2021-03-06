import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "About": return <About />; break;
      case "Blog": return <Blog />; break;
      case "Contact": return <Contact />; break;
      case "Home": return <Home />; break;
      default : return <Home />; break;
    }
  }
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
        <div>
          {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;
