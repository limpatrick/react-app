import { Button } from 'antd';
import React, { ComponentProps } from 'react';

type Props = ComponentProps<typeof Button>;

const LinkButton = React.memo<Props>(props => <Button {...props} />);

export default LinkButton;
