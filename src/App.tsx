import React from "react";
import styles from "./App.module.css"; //通过访问对象的形式来获取样式
import Robot from "./components/Robot";
import robots from "./mockdata/robots.json";
import ShoppingCart from "./components/ShoppingCart";
import logo from "./assets/images/logo.svg";
import { count } from "console";

interface Props {}
interface State {
	robotGallery: any[];
	count: number;
}
class App extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			robotGallery: [],
			count: 0,
		};
	}

	// 等价于useEffect，用于初始化state

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				this.setState({ robotGallery: res });
			});
	}
	render() {
		return (
			<div className={styles.app}>
				<div className={styles.appHeader}>
					<img src={logo} alt="logo" className={styles.appLogo} />
					<h1>罗伯特机器人</h1>
				</div>
				<button
					onClick={() => {
						// setState是异步处理函数，第二个参数是一个回调函数();异步更新，同步执行
						this.setState({ count: this.state.count + 1 }, () => {
							console.log(this.state.count);
						});
						// console.log(this.state.count);
					}}
				>
					{`Click ${this.state.count}`}
				</button>
				<ShoppingCart></ShoppingCart>
				<div className={styles.robotList}>
					{this.state.robotGallery.map((item) => {
						return (
							<Robot
								key={item.id}
								name={item.name}
								id={item.id}
								email={item.email}
							></Robot>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
