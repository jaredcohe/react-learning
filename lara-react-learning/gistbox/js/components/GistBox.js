var GistBox = React.createClass({

    getInitialState: function() {
        
        return { gists: [] };
    
    },

    addGist: function(username) {
        
        console.log(username);
        
        var url = "https://api.github.com/users/" + username + "/gists";
        
        console.log('222222');
        console.log(url);
        
        $.get(url, function(result) {
           
            var username = result[0].owner.login;
            var url = result[0].html_url;
            var gists = this.state.gists.concat({ username, url});
            
            this.setState({ gists: gists })
            
        }.bind(this)); // have to bind this to make this be the GistBox, not the ajax request
        
    },

    render: function() {
        
        var newGist = function(gist) {
            
            return <Gist username={gist.username} url={gist.url} />
            
        };
        
        return (
            
            <div>
            
                <h1>GistBox</h1>
                
                <GistAddForm onAdd={this.addGist} />
                
                {this.state.gists.map(newGist)}
            
            </div>
        
        );
        
        
    }
    
    
})

React.render(<GistBox />, document.querySelector('#app'));
