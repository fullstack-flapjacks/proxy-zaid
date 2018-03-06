import React, { Component } from 'react';
import * as _ from 'ramda';
import Utilities from './Utilities.js';

const Page = ({ page, currentPage, loadPage }) => {
  const pageClassName = (page === currentPage) ? "page-label current-page bold": "page-label";

  return <div 
    key={page} onClick={loadPage} 
    className={pageClassName}>
      <span className="page-label-text">{page}</span>
    </div>;
}

class Pages extends Component {
  constructor(props){
    super(props);

    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  goBack(currentPage, lastPage){
    return (event) => {
      if (currentPage !== 1){
        this.props.loadPage(currentPage - 1)();
      }      
    }
  }

  goForward(currentPage, lastPage){
    return (event) => {
      if (currentPage !== lastPage){
        this.props.loadPage(currentPage + 1)();
      }      
    }
  }

  render(){
    const props = this.props;
    const totalReviews = props.totalReviews;
    const pageLength = props.pageLength;
    const currentPage = props.currentPage;
    const loadPage = props.loadPage;

    const pages = Math.ceil(this.props.totalReviews / this.props.pageLength);
    var showThesePages = Utilities.threePageWindow(currentPage, pages);

    return <div className="pages">
      <div className="go-back-container">
        <div className="goback" onClick={this.goBack(currentPage, pages)}>
          <i className="left-arrow"></i>
        </div>
      </div>


      <div className="page-buttons">
        <div className="page-nav-container">
          {(pages > 3 && currentPage > 2) ?
              <span>
                <div className="first-page-container"> 
                  <Page page={1} currentPage={currentPage} loadPage={loadPage(1)} />
                </div>
                <span className="three-dots">&middot;&middot;&middot;</span>
              </span> : undefined }
          <div className="page-label-container">
            {showThesePages.map((page) => {
              return <Page key={page} page={page} currentPage={currentPage} loadPage={loadPage(page)} />
            })}
          </div>
          {(pages > 3 && currentPage < pages - 1) ?
              <span>
                <span className="three-dots">&middot;&middot;&middot;</span>
                <div className="last-page-container">
                  <Page page={pages} currentPage={currentPage} loadPage={loadPage(pages)} />
                </div>
              </span> : undefined }
        </div>
      </div>

      <div className="go-forward-container">
        <div className="goforward" onClick={this.goForward(currentPage, pages)}>
          <i className="right-arrow"></i>
        </div>
      </div>
    </div>;
  }
}

export default Pages;