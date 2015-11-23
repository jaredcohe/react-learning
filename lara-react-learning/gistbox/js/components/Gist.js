var Gist = React.createClass({

    render: function() {
        
        return (
            
            <div>
          
                {this.props.username}s last Gist is <a href={this.props.url} target="blank">here</a>.
          
            </div>
            
        );
    }
    
    
})
