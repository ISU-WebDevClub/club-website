var Footer = React.createClass({
    render: function() {
        return (
            <div className="container">
                <span className="footer-text pull-left" style={{marginRight: '10px'}}>
                    <p className="text-muted" style={{marginTop: '28px'}}>
                        For more information, <a href="mailto:ISUWebDevClub@gmail.com">send us an email</a> or check us out on social media.
                    </p>
                </span>
                <span className="pull-right" style={{marginTop: '20px'}}>
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
        );
    }
});

React.render(
    <Footer />,
    document.getElementById('footer')
);
