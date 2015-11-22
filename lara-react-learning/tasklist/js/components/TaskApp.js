var TaskApp = React.createClass({

    getInitialState: function() {
        return {
            items: [], 
            task: ''
        }
    },
    
    onChange: function(e) {

        console.log('11111');
        console.log(e);
        console.log('22222');
        console.log(e.target);
        console.log('33333');
        console.log(e.target.value);

        this.setState({ task: e.target.value});
        
    },
  
    addTask: function(e) {
      
      this.setState({
         
         items: this.state.items.concat([this.state.task]),
         
         task: ''
         
      });
      
      e.preventDefault();
      
      console.log("clicked TaskApp.addTask");
      console.log(e);
        
    },
  
    render: function() {

        return (

            <div>

                <h1>Tasks</h1>
    
                <TaskList items={this.state.items} />

                <form onSubmit={this.addTask}>
                    
                    <input onChange={this.onChange} value={this.state.task} />
                    
                    <button>Add task</button>
                    
                </form>

            </div>
        );

    }

});

ReactDOM.render(<TaskApp />, document.body);