import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createPost} from '../actions/index';

class CreatePost extends Component{

    renderField(field){
        const {meta: {touched, error}} = field;
        const className =`form-group ${touched&error ? 'has-danger' : ''}`;
        return (<div className={className}>
            <label>{field.label}</label>
            <input {...field.input} type="text" className="form-control"/>
            <div className='text-help'>
                {touched ? error : ''}
            </div>
        </div>);
    }

    onSubmit(values){
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });
    }

    render(){
        const {handleSubmit} = this.props;
        return (<div>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field label="Title" name="title" component={this.renderField}/>
                        <Field label="Categories" name="categories" component={this.renderField}/>
                        <Field label="Content" name="content" component={this.renderField}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </form>
        </div>);
    }
}

function validate(values) {
    const errors= {};
    if(!values.title){
        errors.title="Enter title...";
    }
    if(!values.categories){
        errors.categories = "Enter categories...";
    }
    if(!values.content){
        errors.content = "Enter content...";
    }
    return errors;
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({createPost}, dispatch);
}
export default reduxForm({validate, form: 'postsNewForm'})(connect(null, mapDispatchToProps)(CreatePost));


