import React, { ComponentProps } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

type Props = { to: string } & ComponentProps<typeof Button>;

const LinkButton = ({ to, onClick, ...props }: Props) => {
	const history = useHistory();
	const handleClick: Props['onClick'] = event => {
		if (onClick) onClick(event);

		history.push(to);
	};

	return <Button onClick={handleClick} {...props} />;
};

export default LinkButton;
