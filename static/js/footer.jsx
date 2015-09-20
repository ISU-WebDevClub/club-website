var Footer = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div style={{marginTop: '20px'}}>
                    <span className="footer-text pull-left" style={{marginBottom: '0px', marginRight: '10px', maxWidth: '65%'}}>
                        <p className="text-muted" style={{marginBottom: '0px', marginTop: '7px'}}>
                            For more information, <a href="mailto:ISUWebDevClub@gmail.com">send us an email</a> or check us out on social media.
                        </p>
                    </span>
                    <span className="pull-right">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/ISUWebDevelopment" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/ISU_Web_Dev" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/ISU-WebDevClub/club-website" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </span>
                </div>
            </div>
        );
    }
});

React.render(
    <Footer />,
    document.getElementById('footer')
);
