import React from 'react';
import { Button, Col, Row } from 'antd';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { map } from 'ramda';
import LinkButton from '~/components/link-button';
import { RootState } from '~/store/root-reducer';
import rootSelectors from '~/store/root-selectors';
import rootActions from '~/store/root-actions';
import { links } from '~/routes';
import useStyles from './styles';

const mapStateToProps = (state: RootState) => ({
	activeTodosIds: rootSelectors.todos.getActiveTodosIds(state),
	completedTodosIds: rootSelectors.todos.getCompletedTodosIds(state),
	status: rootSelectors.router.getPathnameStatus(state)
});

const dispatchProps = { deleteByIds: rootActions.todos.deleteByIds };

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const Footer = ({ activeTodosIds, completedTodosIds, status, deleteByIds }: Props) => {
	const classes = useStyles();
	const handleClick = () => {
		deleteByIds(completedTodosIds);
	};

	return (
		<Row className={classes.root}>
			<Col xs={24} sm={5}>
				{`${activeTodosIds.length} item${activeTodosIds.length > 1 ? 's' : ''} left`}
			</Col>
			<Col xs={24} sm={14}>
				{map(
					({ pathname, status: s, name }) => (
						<LinkButton
							to={pathname}
							key={pathname}
							className={classNames({ [classes.activeLink]: status === s })}
							type="primary"
							ghost
						>
							{name}
						</LinkButton>
					),
					links
				)}
			</Col>
			<Col xs={24} sm={5}>
				{completedTodosIds.length > 0 && (
					<Button type="link" onClick={handleClick}>
						Clear completed
					</Button>
				)}
			</Col>
		</Row>
	);
};

export default connect(mapStateToProps, dispatchProps)(Footer);
