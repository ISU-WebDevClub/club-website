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

var PortfolioCarousel = React.createClass({
    propTypes: {
        portfolio: React.PropTypes.shape({
            active: React.PropTypes.string,
            projects: React.PropTypes.object.isRequired
        }).isRequired
    },

    getDefaultProps: function() {
        return {
            portfolio: {
                active: '',
                projects: {}
            }
        };
    },

    render: function() {
        // shuffle the projects
        var titles = getKeys(this.props.portfolio['projects']);
        titles.sort(function() {return Math.random() - 0.5});

        // determine the initial active project
        var active = undefined;
        if (this.props.portfolio.hasOwnProperty('active')) {
            active = this.props.portfolio['active'];
        }

        var title;
        var titleIndex;
        if (!active) {
            active = titles[0];
        }
        else {
            // make sure the active title is at index 0
            for (titleIndex in titles) {
                if (!titles.hasOwnProperty(titleIndex)) {
                    continue;
                }

                title = titles[titleIndex];
                if (title === active) {
                    titles[titleIndex] = titles[0];
                    titles[0] = active;
                }
            }
        }

        // create an indicator and item element for each project
        var indicators = [];
        var items = [];
        var i = 0;
        for (titleIndex in titles) {
            if (!titles.hasOwnProperty(titleIndex)) {
                continue;
            }

            title = titles[titleIndex];
            if (!this.props.portfolio['projects'].hasOwnProperty(title)) {
                continue;
            }

            var project = this.props.portfolio['projects'][title];
            var isActive = title === active;
            var activeClass = (isActive ? 'active': '');
            indicators.push(<li data-target="#project-carousel" data-slide-to={i} className={activeClass} />);
            items.push(<CarouselItem active={isActive} project={project} title={title} />);
            i += 1;
        }

        return (
            <div>
                <div id="project-carousel" className="carousel slide" data-ride="carousel" style={{backgroundColor: '#444444'}}>
                    <ol className="carousel-indicators">
                        {indicators}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {items}
                    </div>
                    <a className="left carousel-control" href="#project-carousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#project-carousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div id="project"></div>
            </div>
        );
    }
});

var CarouselItem = React.createClass({
    propTypes: {
        active: React.PropTypes.bool,
        project: React.PropTypes.shape({
            description: React.PropTypes.string.isRequired,
            image: React.PropTypes.string.isRequired,
            page: React.PropTypes.string.isRequired
        }).isRequired,
        title: React.PropTypes.string.isRequired
    },

    getDefaultProps: function() {
        return {
            active: false,
            project: {
                description: '',
                image: '',
                page: ''
            },
            title: ''
        };
    },

    render: function() {
        return (
            <div className={'item' + (this.props.active ? ' active' : '')}>
                <img src={this.props.project['image']} alt={this.props.title} style={{height: '500px', maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
                <div className="carousel-caption">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.project['description']}</p>
                    <p>
                        <a className="btn btn-primary" href="javascript:void(0);" onClick={this.renderProject} role="button">Learn More</a>
                    </p>
                </div>
            </div>
        );
    },

    renderProject: function(event) {
        $('#project').load(this.props.project['page']);
    }
});

$.getJSON('portfolios.json', function(data) {
    React.render(
        <PortfolioCarousel portfolio={data} />,
        document.getElementById('content')
    );
});
