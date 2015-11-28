import React, { PropTypes, Component } from 'react';

export default class Section extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element
        ]).isRequired
    }
    render() {
        let { title, children } = this.props;
        return (
            <section>
                <div className="section-header">
                    <h2>{title}</h2>
                </div>
                {children}
            </section>
        );
    }
}
