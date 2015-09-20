// browser-agnostic shim for getting the keys of an object
var getKeys = Object.keys ? Object.keys : function(obj) {
    var keys = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            keys.push(k);
        }
    }

    return keys;
};

var MemberList = React.createClass({
    propTypes: {
        members: React.PropTypes.object.isRequired
    },

    getDefaultProps: function() {
        return {
            members: {}
        };
    },

    render: function() {
        // shuffle the members
        var members = getKeys(this.props.members['members']);
        members.sort(function() {return Math.random() - 0.5});

        // create member rows
        var rows = [];
        var row = [];
        var rowSize = 0;
        for (var i in members) {
            if (!members.hasOwnProperty(i)) {
                continue;
            }

            var member = members[i];
            if (!this.props.members['members'].hasOwnProperty(member)) {
                continue;
            }

            if (rowSize >= 4) {
                // add a row
                rows.push(
                    <div className="row">
                        {row}
                    </div>
                );
                row = [];
                rowSize = 0;
            }

            // add a member to the next row
            var content = this.props.members['members'][member];
            row.push(<Member content={content} name={member} />);
            rowSize += 1;
        }

        // add the last row
        if (rowSize > 0) {
            rows.push(
                <div className="row">
                    {row}
                </div>
            );
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
});

var Member = React.createClass({
    propTypes: {
        content: React.PropTypes.shape({
            description: React.PropTypes.string.isRequired,
            image: React.PropTypes.string.isRequired
        }).isRequired,
        name: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            content: {
                description: '',
                image: ''
            },
            name: ''
        };
    },

    render: function() {
        return (
            <div className="col-lg-3">
                <div className="thumbnail member-thumbnail">
                    <img src={this.props.content.image} className="img-circle" alt="picture api broken" style={{width: '200px', height: '200px'}} />
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.content.description}</p>
                    </div>
                </div>
            </div>
        );
    }
});

$.getJSON('members.json', function(data) {
    React.render(
        <MemberList members={data} />,
        document.getElementById('content')
    );
});
