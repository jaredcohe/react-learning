var GistAddForm = React.createClass({

    getInitialState: function() {
        
        return {
            
            username: ''
            
        }
        
    },
    
    onChange: function(e) {
        
        console.log('333333');
        console.log(e.target.value);
        console.log(this.state);
        
        this.setState({username: e.target.value});
        
        console.log(this.state);
        
    },
    
    addGist: function(e) {
      
        e.preventDefault();
        
        // calls the function passed in from the parent GistBox
        console.log('11111');
        console.log(this.state.username);

        this.props.onAdd(this.state.username);

        this.setState({ username: ''});
        
    },

    render: function() {
        
        return (
            
            <div>
          
                <form className="classNeedsName" onSubmit={this.addGist}>
                
                    <input value={this.state.username} onChange={this.onChange} placeholder="Type github username" />
                
                    <button>Fetch lastest gist</button>
                
                </form>
          
            </div>
            
        );
    }

})
