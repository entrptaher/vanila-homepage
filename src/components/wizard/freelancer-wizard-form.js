import React, {Component} from 'react';
import Card from './wizard-card';
import Slider from './slider';
import DatePicker from './datepicker';
import SearchableDropDown from './dropdown';

export default class WizardForm extends Component {
    constructor() {
        super();
        this.state = {
            category:'',
            type:'',
            country:['Pakistan','Serbia','United States','France','Germany','United Arab Emirates'],
            role:['Frontend Developer','Backend Developer','Designer'],
            languages:['React JS','Angular JS','Javascript','JQuery','Meteor','React JS','Angular JS','Javascript','JQuery','Meteor']
        }
    }
    getClass(current, step) {
        if (step == this.props.currentStep) {
            return current;
        } else {
            return current + ' hidden';
        }
    }
    nextStep() {
        this.props.nextStep();
    }
    updateBudget() {

    }
    updateCategoryCard(type) {
        this.setState({category: type})
    }
    updateTypeCard(type) {
        this.setState({type: type})
    }
    checkType(type){
        if(this.state.type == type){
            return 'checked';
        }
        else{
            return '';
        }
    }
    render() {
        var buttonText = this.props.currentStep == 5
            ? 'finish'
            : 'next';
        var buttonClass = this.props.currentStep == 5
            ? 'danger'
            : '';
        if(this.props.currentStep == 1){
            buttonClass = 'hidden';
        }
        var url = (this.state.avatar != null) ? this.state.avatar : require('../../../public/img/freelancerAssets/placeholder.jpg');
        var avatarImage = {
          backgroundImage:`url(${url})`
        }
        return (
            <div className="wizard-form">
                <div className="col-md-12">
                    <div className={this.getClass("container", 1)}>
                        <div className="row">
                            <div className="col-md-12 text-center login-button-container">
                                <button className="facebook-button" onClick={this.nextStep.bind(this)}>
                                    <img src={require('../../../public/img/freelancerAssets/facebook.png')} />
                                    Sign in with Facebook
                                </button>
                                OR
                                <button className="register-button" onClick={this.nextStep.bind(this)}>Register with Email</button>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 2)}>
                        <div className="row">
                            <div className="form col-md-6">
                                <label className="form-heading">First Name</label>
                                <input type="text" placeholder="John" ref="firstname"/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">First Name</label>
                                <input type="text" placeholder="Smith" ref="lastname"/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Email</label>
                                <input type="email" placeholder="john@example.com" ref="email"/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 3)}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="avatar-container" style={avatarImage}/>
                                <button className="image-upload-button">Upload Avatar</button>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Country</label>
                                <SearchableDropDown value={this.state.country} placeholder="Example: France" multiple={false}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">City</label>
                                <input type="text" placeholder="Paris" ref="city"/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 4)}>
                        <div className="row">
                            <div className="form col-md-12">
                                <label className="form-heading">Select your Title</label>
                                <SearchableDropDown value={this.state.role}  multiple={false}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Add your skills</label>
                                <SearchableDropDown value={this.state.languages} placeholder="Example: Javascript" multiple={true}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 5)}>
                        <div className="row">
                            <div className="form col-md-5">
                                <label className="form-heading">Your Rates</label>
                                <input type="text" placeholder="$20 / hr" ref="rate"/>
                            </div>
                            <div className="form col-md-7">
                                <label className="form-heading">Monthly Salary</label>
                                <input type="text" placeholder="$2000" ref="salary"/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Github Username</label>
                                <input type="text" placeholder="Example: johnsmith" ref="github"/>
                            </div>
                        </div>
                    </div>
                    <div className="button-container container">
                        <div className="row">
                            <div className="col-md-12">
                                <button className={buttonClass} onClick={this.nextStep.bind(this)}>
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}