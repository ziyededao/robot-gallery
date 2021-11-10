import React from "react";
import styles from "./App.module.css"; //通过访问对象的形式来获取样式
import Robot from "./components/Robot";
import robots from "./mockdata/robots.json";
import logo from "./assets/images/logo.svg";

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.appHeader}>
				<img src={logo} alt="logo" className={styles.appLogo} />
				<h1>罗伯特机器人</h1>
			</div>
			<div className={styles.robotList}>
				{robots.map((item) => {
					return (
						<Robot
							// key={item.id}
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

export default App;
