import React from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';


const ParentLandingPage = () => {
  return (
    <div className="bg-color-gray min-height-1000">
      <div className="parent-background min-height-600">
        <div className="pt-50 container text-center">

          <h1 className="font-72 color-white shadow-text"> Find a trusted sitter for your kid</h1>
          <div className="mt-75">
            <div className="big-form">
              <p> <h4> Find a trusted baby sitter </h4> </p>
              <DatePicker hintText="Select the date" mode="landscape" />
              <RaisedButton label="Find a sitter" primary={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="p m bg-color-white">
              Comment A
            </div>
          </div>
          <div className="col-md-4">
            <div className="p m bg-color-white">
              Comment B
            </div>
          </div>
          <div className="col-md-4">
            <div className="p m bg-color-white">
              Comment C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentLandingPage;
