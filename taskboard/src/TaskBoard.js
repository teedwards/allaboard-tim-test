import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import ThreePanel from "./threePanel.js";
import TodoList from "./TodoList.js";
import data from './data.json';
import "./index.css";

class TaskBoard extends Component{


  constructor(props){
    super(props);

    var myInfo = data;

    var modules = myInfo.modules;
    var currentModule = modules[0];

    var activites = currentModule.activites;
    var currentActivity = activites[0];

    var tasks = currentActivity.tasks;
    this.state = {
      modules: myInfo.modules,
      currentModule: currentModule,

      activites: currentModule.activites,
      currentActivity: currentActivity,

      tasks: currentActivity.tasks,

      open: false,
      modalContent:""
    };

    this.changeModule = this.changeModule.bind(this);
    this.changeActivity = this.changeActivity.bind(this);
    this.selectTask = this.selectTask.bind(this);

    console.dir(modules[0]);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
   this.setState({ open: false });
 };

  changeModule(key){

    var filteredMod = this.state.modules.find(function (module){
      return (module.key === key);
    });

    this.setState({
      currentModule: filteredMod,
      activites: filteredMod.activites,
      currentActivity: filteredMod.activites[0],
      tasks: filteredMod.activites[0].tasks,

    });
    this.forceUpdate();
    console.dir(this.state.currentModule);

  }

  changeActivity(key){
    var filteredActivity = this.state.activites.find(function (activity){
      return (activity.key === key);
    });

    this.setState({
      tasks: filteredActivity.tasks,
    });
    this.forceUpdate();
  }

  selectTask(key){
    this.onOpenModal();

    var filteredTask = this.state.tasks.find(function (task){
      return (task.key === key);
    });

    this.setState({
      modalContent: filteredTask.description
    });
    this.forceUpdate();

  }



  render(){
    const { open } = this.state;
    return(
      <div>
      <Modal open={open} onClose={this.onCloseModal} center>
      <br />
        <p>{this.state.modalContent}</p>
      </Modal>
        <ThreePanel
          panelOne = {<TodoList items={this.state.modules} change={this.changeModule}/>}
          panelTwo = {<TodoList items={this.state.activites} change={this.changeActivity}/>}
          panelThree = {<TodoList items={this.state.tasks} change={this.selectTask} />}
        />
      </div>
    );

  };


}
export default TaskBoard;
