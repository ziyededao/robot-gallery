import React, { useEffect, useState } from "react";
import styles from "./App.module.css"; //通过访问对象的形式来获取样式
import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import ShoppingCart from "./components/ShoppingCart";

import logo from "./assets/images/logo.svg";

interface Props {
	// username: string;
}
interface robotItem {
	id: number;
	name: string;
	email: string;
}
const App: React.FC<Props> = (props) => {
	// const { username } = props;
	const [count, setCount] = useState<number>(0);
	const [robotGallery, setRobotGallery] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		document.title = `点击${count}次`;
	}, [count]);
	// 如果useEffect不传入第二个参数时（相当于componentDidUpdate），会在每一次页面渲染UI时触发函数；第一次进入页面时调用了setRobotGallery，导致页面重新渲染->调用函数API请求->setRobotGallery->页面重新渲染UI
	useEffect(() => {
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then((res) => res.json())
		// 	.then((res) => {
		// 		setRobotGallery(res);
		// 	});
		// 在useEffect中使用异步请求
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/users");
				const data = await res.json();
				setRobotGallery(data);
			} catch (e) {
				setError(e.message);
			}
			setLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div className={styles.app}>
			<div className={styles.appHeader}>
				<img src={logo} alt="logo" className={styles.appLogo} />
				<h1>罗伯特机器人</h1>
			</div>
			{/* <h2>{username}</h2> */}
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				{`Click ${count}`}
			</button>
			<ShoppingCart></ShoppingCart>
			{(!error || error !== "") && <div>网站出错：{error}</div>}
			{loading ? (
				<h2>loading</h2>
			) : (
				<div className={styles.robotList}>
					{robotGallery.map((item: robotItem, index: number) => {
						return index % 2 === 0 ? (
							<RobotDiscount
								id={item.id}
								key={item.id}
								name={item.name}
								email={item.email}
							></RobotDiscount>
						) : (
							<Robot
								id={item.id}
								key={item.id}
								name={item.name}
								email={item.email}
							></Robot>
						);
					})}
				</div>
			)}
		</div>
	);
	// }
};

export default App;
