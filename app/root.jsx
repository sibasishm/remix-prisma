import * as React from 'react';
import { Scripts } from '@remix-run/react';

export default function App() {
	const [count, setCount] = React.useState(0);
	return (
		<html lang='en'>
			<head>
				<meta charset='UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>My First Remix App</title>
			</head>
			<body>
				<h1>Welcome to Remix!</h1>
				<p>Counter is the new hello world.</p>
				<button
					onClick={() => {
						setCount(count + 1);
					}}
				>
					{count}
				</button>
				<Scripts />
			</body>
		</html>
	);
}
