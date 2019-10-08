import { omit } from 'ramda';
import React, { ComponentProps, PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import LinkButton from './link-button';

type Props = { to: string } & ComponentProps<typeof LinkButton> & RouteComponentProps;

class LinkButtonContainer extends PureComponent<Props> {
	handleClick: ComponentProps<typeof LinkButton>['onClick'] = event => {
		const { history, to, onClick } = this.props;

		if (onClick) onClick(event);

		history.push(to);
	};

	render() {
		const props = omit(
			['history', 'location', 'match', 'staticContext', 'to', 'onClick'],
			this.props
		);

		return <LinkButton onClick={this.handleClick} {...props} />;
	}
}

export default withRouter(LinkButtonContainer);
